import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-lg text-slate-600">Sorry, this page doesn't exist.</p>
      <Link
        to="/"
        className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
