export default function PageHeader({ title, subtitle = "" }) {
  return (
    <section className="bg-linear-to-br from-blue-700 to-indigo-800 py-16 text-center text-white">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-blue-100">{subtitle}</p>}
      </div>
    </section>
  );
}
