import React, { useEffect, useRef, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
    setShowMenu(!showMenu);
  };

  const navRef = useRef();
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setShowNav(false);
        setShowMenu(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const toTop = document.querySelector("#to-top");

      if (window.pageYOffset > 100) {
        toTop?.classList.remove("hidden");
        toTop?.classList.add("flex");
      } else {
        toTop?.classList.remove("flex");
        toTop?.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-[9999] flex w-full items-center backdrop-blur-md transition-all duration-300 ${
        theme
          ? 'bg-dark/85 border-b border-slate-800/60 shadow-slate-900/50'
          : 'bg-white/85 border-b border-slate-200/60 shadow-slate-200/50'
      }`}
    >
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <a href="#home" className="block py-5 text-xl font-bold text-primary">
              dwipras
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              ref={navRef}
              name="hamburger"
              type="button"
              className={`absolute right-4 block lg:hidden ${
                showNav ? "hamburger-active" : ""
              }`}
              onClick={toggleNav}
            >
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>
            <nav
              id="nav-menu"
              ref={menuRef}
              className={`${
                showMenu ? "block" : "hidden"
              } absolute right-4 top-full w-full max-w-[250px] rounded-xl bg-white/95 p-4 shadow-xl backdrop-blur-md dark:bg-slate-900/95 dark:shadow-slate-950 border border-slate-200 dark:border-slate-800 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none lg:border-none lg:backdrop-blur-none lg:dark:bg-transparent`}
            >
              <ul className="block lg:flex lg:items-center">
                <li className="group">
                  <a
                    href="#home"
                    className="mx-4 flex py-2 text-base font-medium text-slate-700 transition-colors duration-300 hover:text-primary dark:text-slate-200 dark:hover:text-primary"
                  >
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#experience"
                    className="mx-4 flex py-2 text-base font-medium text-slate-700 transition-colors duration-300 hover:text-primary dark:text-slate-200 dark:hover:text-primary"
                  >
                    Tentang Saya
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="mx-4 flex py-2 text-base font-medium text-slate-700 transition-colors duration-300 hover:text-primary dark:text-slate-200 dark:hover:text-primary"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#clients"
                    className="mx-4 flex py-2 text-base font-medium text-slate-700 transition-colors duration-300 hover:text-primary dark:text-slate-200 dark:hover:text-primary"
                  >
                    Clients
                  </a>
                </li>
                <li className="mt-3 flex items-center pl-4 lg:mt-0 lg:pl-2">
                  <button
                    id="dark-toggle"
                    onClick={handleTheme}
                    className={`relative flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                      theme ? 'bg-blue-500' : 'bg-slate-300'
                    }`}
                    aria-label="Toggle dark mode"
                  >
                    <div
                      className={`absolute left-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition-transform duration-300 ease-in-out ${
                        theme ? 'translate-x-5' : ''
                      }`}
                    >
                      {theme ? <Sun size={12} className="text-amber-500" /> : <Moon size={12} className="text-slate-700" />}
                    </div>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}