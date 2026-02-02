import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { ROUTES } from "../../constants";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  // 🌙 Dark mode handling
  useEffect(() => {
    const html = document.documentElement;
    theme === "dark"
      ? html.classList.add("dark")
      : html.classList.remove("dark");
  }, [theme]);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Reviews", href: "#reviews" },
  ];

  return (
    <nav className="relative w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      
      {/* Purple glow */}
      <div className="absolute inset-y-0 right-0 w-[40%] bg-gradient-to-l from-purple-300/40 to-transparent dark:from-purple-800/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold">
            Q
          </div>
          <span className="text-xl font-semibold text-gray-900 dark:text-white">
            Qu<span className="text-purple-600">vouch</span>
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-600 dark:text-gray-300 font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-purple-600 transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-5">
          
          {/* 🌙 / ☀️ Theme toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <MdOutlineDarkMode size={22} className="text-gray-700 dark:text-gray-300" />
) : (
  <MdOutlineLightMode size={22} className="text-yellow-400" />
)}
          </button>

          {/* Sign In */}
          <Link
            to={ROUTES.LOGIN}
            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 font-medium"
          >
            Sign In
          </Link>

          {/* Get Started */}
          <Link
            to={ROUTES.LOGIN}
            className="px-5 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md hover:opacity-90 transition"
          >
            Get Started →
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-6 py-4 space-y-4 text-gray-700 dark:text-gray-300">

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-purple-600"
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center justify-between pt-4">
              
              {/* 🌙 / ☀️ Mobile theme toggle */}
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {theme === "light" ? (
                  <MdOutlineDarkMode size={22} />
                ) : (
                  <MdOutlineLightMode size={22} />
                )}
              </button>

              <Link
                to={ROUTES.LOGIN}
                onClick={() => setMenuOpen(false)}
                className="text-purple-600 font-medium"
              >
                Sign In
              </Link>
            </div>

            <Link
              to={ROUTES.LOGIN}
              onClick={() => setMenuOpen(false)}
              className="block text-center mt-3 px-5 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600"
            >
              Get Started →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
