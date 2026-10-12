
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import schoolConfig from "../data/schoolConfig";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Gallery", path: "/gallery" },
  { label: "Notices", path: "/notices" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="bg-blue-900 px-4 py-2 text-center text-sm text-white">
        Admissions are open — contact our school office for details.
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 font-bold text-white">
              {schoolConfig.shortName}
            </div>
            <div>
              <p className="font-bold text-slate-900">
                {schoolConfig.name}
              </p>
              <p className="text-xs text-slate-500">
                {schoolConfig.tagline}
              </p>
            </div>
          </Link>

          <button
            type="button"
            className="rounded-lg border px-3 py-2 text-sm md:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          <div className="hidden items-center gap-5 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive
                      ? "text-blue-700"
                      : "text-slate-600 hover:text-blue-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/admissions"
              className="rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Apply Now
            </Link>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t bg-white px-4 py-3 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-3 ${
                      isActive
                        ? "bg-blue-50 font-semibold text-blue-700"
                        : "text-slate-700"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <Link
                to="/admissions"
                onClick={closeMenu}
                className="mt-2 rounded-lg bg-blue-700 px-3 py-3 text-center font-semibold text-white"
              >
                Apply for Admission
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
