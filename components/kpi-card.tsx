export function KpiCard({ title, value }: { title: string; value: string | number }) {
  return (
    <article className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <h3 className="text-sm text-slate-500">{title}</h3>
      <p className="mt-2 text-2xl font-bold text-slate-800">{value}</p>
    </article>
  );
}
