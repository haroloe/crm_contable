import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl p-8">
      <h1 className="text-3xl font-bold text-brand">CRM Contable Peruano</h1>
      <p className="mt-2 text-slate-600">Plataforma profesional con Next.js, Prisma, Auth.js y arquitectura event-driven.</p>
      <div className="mt-6 flex gap-3">
        <Link href="/login" className="rounded bg-brand px-4 py-2 text-white">Iniciar sesión</Link>
        <Link href="/dashboard" className="rounded border border-slate-300 px-4 py-2">Ver dashboard</Link>
      </div>
    </div>
  );
}
