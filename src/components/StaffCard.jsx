export default function StaffCard({ name, title, department, photo }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img src={photo} alt={name} className="h-64 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
        <p className="mt-1 font-medium text-blue-700">{title}</p>
        <span className="mt-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
          {department}
        </span>
      </div>
    </article>
  );
}
