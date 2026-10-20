import { Link } from "react-router-dom";
import { school } from "../data/school";
import { navLinks } from "../data/navLinks";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  const socials = school.socials.filter((s) => s.url);
  const phoneHref = `tel:${school.phone.replace(/\s/g, "")}`;

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        {/* Column 1: about */}
        <div>
          <h3 className="text-xl font-bold text-white">{school.name}</h3>
          <p className="mt-3 leading-relaxed">{school.tagline}</p>

          {socials.length > 0 && (
            <ul className="mt-5 flex gap-3">
              {socials.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white"
                  >
                    <SocialIcon
                      name={s.platform}
                      fallback={s.label}
                      className="h-5 w-5"
                    />{" "}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Column 2: quick links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: contact SocialIcon*/}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <ul className="mt-4 space-y-3">
            <li>{school.address}</li>
            <li>
              <a href={phoneHref} className="transition hover:text-white">
                {school.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${school.email}`}
                className="transition hover:text-white"
              >
                {school.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 px-4 py-5 text-center text-sm">
        © {new Date().getFullYear()} {school.name}. All rights reserved.
      </div>
    </footer>
  );
}
