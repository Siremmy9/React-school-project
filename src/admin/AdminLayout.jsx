import { useState } from "react";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { school } from "../data/school";
import { adminNav } from "../data/adminNav";
import AdminIcon from "./AdminIcon";
import { useAuth } from "../context/AuthContext";

// Fake for now. Later these numbers come from the database.
const badges = { "/admin/admissions": 1 };

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const current = adminNav.find((item) => item.to === pathname);
  const title = current ? current.label : "Admin";

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Dark overlay (phones, while the menu is open ) */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-slate-900 transition-transform duration-300 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="border-b border-slate-800 px-5 py-5">
          <p className="font-bold leading-tight text-white">{school.name}</p>
          <p className="mt-1 text-sm font-medium text-blue-400">Admin</p>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {adminNav.map((item) => {
            const badge = badges[item.to];
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                <AdminIcon name={item.icon} className="h-5 w-5 shrink-0" />
                <span className="flex-1">{item.label}</span>
                {badge > 0 && (
                  <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-1.5 text-xs font-bold text-slate-900">
                    {badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t border-slate-800 p-3">
          <button
            type="button"
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            <AdminIcon name="logout" className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div className="md:pl-64">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="rounded-lg p-2 text-xl text-slate-700 hover:bg-slate-100 md:hidden"
            >
              ☰
            </button>
            <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:inline-flex"
            >
              <AdminIcon name="external" className="h-4 w-4" />
              View website
            </a>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                A
              </span>
              <span className="hidden text-sm font-medium text-slate-700 sm:inline">
                admin
              </span>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
