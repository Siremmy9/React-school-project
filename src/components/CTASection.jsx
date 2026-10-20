import { Link } from "react-router-dom";

export default function CTASection({ title, text, buttonLabel, to }) {
  return (
    <section className="bg-linear-to-br from-blue-700 to-indigo-800 py-16 text-center text-white">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-blue-100">{text}</p>
        <Link
          to={to}
          className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
