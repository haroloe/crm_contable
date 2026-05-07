import { prisma } from '@/lib/prisma';
import { KpiCard } from '@/components/kpi-card';

export default async function DashboardPage() {
  const [activos, pagosPendientes, vencimientos, deudaTotal] = await Promise.all([
    prisma.client.count({ where: { status: 'ACTIVO' } }),
    prisma.payment.count({ where: { status: 'PENDIENTE' } }),
    prisma.taxObligation.count({ where: { status: 'PENDIENTE' } }),
    prisma.payment.aggregate({ _sum: { amount: true }, where: { status: 'PENDIENTE' } })
  ]);

  return (
    <div className="mx-auto max-w-6xl p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <KpiCard title="Clientes activos" value={activos} />
        <KpiCard title="Pagos pendientes" value={pagosPendientes} />
        <KpiCard title="Vencimientos" value={vencimientos} />
        <KpiCard title="Deuda total" value={`S/ ${deudaTotal._sum.amount ?? 0}`} />
      </div>
    </div>
  );
}
