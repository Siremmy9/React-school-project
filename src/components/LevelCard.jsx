export default function LevelCard({
  name,
  ages,
  description,
  subjects,
  image,
}) {
  return (
    <div className="group relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-2xl shadow-sm">
      {/* Layer 1: photo */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      {/* Layer 2: gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/10" />

      {/* Layer 3: text */}
      <div className="relative z-10 p-8 text-white">
        <span className="text-sm font-semibold uppercase tracking-wide text-blue-300">
          {ages}
        </span>
        <h3 className="mt-2 text-2xl font-bold">{name}</h3>
        <p className="mt-3 leading-relaxed text-slate-200">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {subjects.map((subject) => (
            <li
              key={subject}
              className="rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur"
            >
              {subject}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
