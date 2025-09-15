import React, { useEffect, useRef, useState } from 'react'

export default function Header() {
  // Hamburger Start
  const [showNav, setShowNav] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
    setShowMenu(!showMenu);
  };
  // Hamburger End

  // Klik di luar hamburger Start
  const navRef = useRef();
  const menuRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== navRef.current && e.target !== menuRef.current) {
      setShowNav(false);
      setShowMenu(false);
    }
  });
  // Klik di luar hamburger End

  // Navbar Fixed Start
  window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector("#to-top");

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
      toTop.classList.remove("hidden");
      toTop.classList.add("flex");
    } else {
      header.classList.remove("navbar-fixed");
      toTop.classList.remove("flex");
      toTop.classList.add("hidden");
    }
  };
  // Navbar Fixed End

  // Darkmode toggle Start
  const html = document.querySelector("html");

  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme") == "dark"
        ? true
        : false
      : false
  );

  const handleTheme = (event) => {
    setTheme(event.target.checked);
    if (theme == false) {
      html.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      html.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    const darkToggle = document.getElementById("dark-toggle");
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      darkToggle.checked = true;
    } else {
      darkToggle.checked = false;
    }
  });
  // Darkmode toggle End
  return (
    <header
        className="absolute left-0 top-0 z-10 flex w-full items-center
      bg-transparent"
      >
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="px-4">
              <a
                href="#home"
                className="block py-6 text-lg font-bold text-primary"
              >
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
                  showMenu ? "" : "hidden"
                } absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark 
                dark:shadow-slate-500 lg:static 
                lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent`}
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white lg:mx-6"
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white lg:mx-6"
                    >
                      Tentang Saya
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white lg:mx-6"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#clients"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white lg:mx-6"
                    >
                      Clients
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white lg:mx-6"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="mt-3 flex items-center pl-8 lg:mt-0">
                    <div className="flex">
                      <span className="mr-2 text-sm text-slate-500">light</span>
                      <input
                        type="checkbox"
                        id="dark-toggle"
                        value={theme}
                        onChange={handleTheme}
                        className="hidden"
                      />
                      <label htmlFor="dark-toggle">
                        <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                          <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
                        </div>
                      </label>
                      <span className="ml-2 text-sm text-slate-500">dark</span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
  )
}
