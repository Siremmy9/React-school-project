import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { school } from "../data/school";
import FormField from "../components/FormField";

export default function AdminLogin() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  // Already logged in? Skip the login page.
  if (user) return <Navigate to="/admin" replace />;

  function handleChange(e) {
    setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const ok = login(form.username.trim(), form.password);

    if (ok) {
      navigate("/admin", { replace: true });
    } else {
      setError("Incorrect username or password. Please try again.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <p className="text-2xl font-bold text-blue-700">{school.name}</p>
          <h1 className="mt-2 text-lg text-slate-600">Admin Login</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <FormField
            label="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
            autoComplete="username"
            required
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />

          {error && (
            <p
              role="alert"
              className="rounded-lg bg-red-100 px-4 py-3 text-sm text-red-800"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm">
          <Link
            to="/"
            className="text-slate-500 transition hover:text-blue-600"
          >
            ← Back to website
          </Link>
        </p>
      </div>
    </div>
  );
}
