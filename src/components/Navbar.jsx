import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../data/navLinks";
import { useAuth } from "../context/AuthContext";

// const links = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About" },
//   { to: "/academics", label: "Academics" },
//   { to: "/admissions", label: "Admissions" },
//   { to: "/news", label: "News & Events" },
//   { to: "/staff", label: "Staff" },
//   { to: "/contact", label: "Contact" },
// ];

const linkClass = ({ isActive }) =>
  `block rounded-lg px-3 py-2 text-sm font-medium transition ${
    isActive ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-slate-100"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <span className="text-xl font-bold text-blue-700">SirEmmy Academy</span>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          <ul className="flex gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={linkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/admin"
            className="ml-2 rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white"
          >
            {user ? "Dashboard" : "Admin Login"}
          </Link>
        </div>

        {/* Hamburger button (phones only) */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
        >
          {open ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M6 18L18 6"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="space-y-1 border-t border-slate-200 px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/admin"
              onClick={() => setOpen(false)}
              className="block rounded-lg border border-blue-600 px-3 py-2 text-center text-sm font-semibold text-blue-700"
            >
              {user ? "Dashboard" : "Admin Login"}
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
