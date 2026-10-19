export default function NewsCard({ title, excerpt, image, type, date }) {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const badgeClass =
    type === "EVENT"
      ? "bg-amber-100 text-amber-800"
      : "bg-blue-100 text-blue-800";

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between text-sm">
          <span className={`rounded-full px-3 py-1 font-medium ${badgeClass}`}>
            {type === "EVENT" ? "Event" : "News"}
          </span>
          <time className="text-slate-500">{formattedDate}</time>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 leading-relaxed text-slate-600">{excerpt}</p>
      </div>
    </article>
  );
}
