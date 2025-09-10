import React, { useEffect, useRef, useState } from "react";
import fotoDwi from "../src/assets/images/dwi.png";
import portfolioMaknaJiwa from "../src/assets/images/portfolio/maknajiwadashboard.png";
import portfolioTwitter from "../src/assets/images/portfolio/twittersearch.png";
import portfolioWarehouse from "../src/assets/images/portfolio/warehousegudang.png";
import portfolioFinna from "../src/assets/images/portfolio/finnaproduk.png";
import portfolioRSKM from "../src/assets/images/portfolio/ermrskm.jpg";
import clientGoogle from "../src/assets/images/clients/google.png";
import clientGojek from "../src/assets/images/clients/gojek.png";
import clientTokopedia from "../src/assets/images/clients/tokopedia.png";
import clientFinna from "../src/assets/images/clients/finna.png";
import clientRSKM from "../src/assets/images/clients/logo_rskm.png";

function App() {
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
    <>
      {/* Header Section Start */}
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
      {/* Header Section End */}

      {/* Hero Section Start */}
      <section id="home" className="pt-36 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Halo 👋, saya{" "}
                <span className="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">
                  Dwi Prasetyo
                </span>
              </h1>
              <h2 className="mb-5 text-lg font-medium text-secondary lg:text-2xl">
                <span className="text-dark dark:text-white">Programmer</span> & Curious Learner
              </h2>
              <p className="mb-10 font-medium leading-relaxed text-secondary">
                Lebih sering ngoding daripada ngopi ☕. 
                Laravel udah jadi comfort zone, React.js side quest seru, dan 
                ASP.NET Core MVC petualangan terbaru. 
                Misi saya: bukan cuma nge-push commit, tapi juga nge-push semangat tim 🚀.
              </p>
              <a
                href="#contact"
                className="rounded-full bg-primary px-8 py-3 text-base font-semibold 
                text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
              >
                Hubungi Saya
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:right-0 lg:mt-0">
                <img
                  src={fotoDwi}
                  alt="Foto Dwi"
                  className="relative z-10 mx-auto max-w-full"
                />
                <span
                  className="absolute -bottom-10 left-1/2 
                 -translate-x-1/2 md:scale-90"
                >
                  <svg
                    width={400}
                    height={400}
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#14b8a6"
                      d="M45.7,-13.2C52.4,5.8,46.3,30.6,27.7,46C9,61.4,-22.2,67.4,-40.5,54.4C-58.9,41.4,-64.4,9.3,-55.5,-12.7C-46.6,-34.7,-23.3,-46.8,-1.9,-46.1C19.5,-45.5,39,-32.3,45.7,-13.2Z"
                      transform="translate(100 100) scale(1.1)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* About Section Start */}
      <section id="about" className="pb-32 pt-36 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap items-start lg:flex-nowrap lg:gap-8">
            
            {/* Left - Meme Resume */}
            <div className="mb-10 w-full px-4 lg:w-1/2">
              <h4 className="mb-3 text-lg font-bold uppercase text-primary">
                Resume (versi chill)
              </h4>
              <h2 className="mb-5 max-w-md text-3xl font-bold text-dark dark:text-white lg:text-4xl">
                Bukan CV Biasa 🚀
              </h2>
              <p className="max-w-xl text-base font-medium text-secondary lg:text-md leading-relaxed">
                🖥️ <span className="font-semibold text-dark dark:text-white">Skill:</span> Bisa bikin bug dengan cepat, fix-nya agak lama.  
                🍜 <span className="font-semibold text-dark dark:text-white">Hobi:</span> Ngoding sambil mikirin mau makan apa.  
                🐱 <span className="font-semibold text-dark dark:text-white">Fun Fact:</span> Console.log() udah kayak sahabat sendiri.  
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="/src/assets/cv/cv-dwi-prasetyo-id.pdf"
                  target="_blank"
                  className="rounded-lg bg-primary px-6 py-3 text-white font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                >
                  📄 CV Indonesia
                </a>
                <a
                  href="/src/assets/cv/cv-dwi-prasetyo-en.pdf"
                  target="_blank"
                  className="rounded-lg border border-primary px-6 py-3 text-primary font-semibold transition duration-300 ease-in-out hover:bg-primary hover:text-white hover:shadow-lg"
                >
                  📄 CV English
                </a>
              </div>
            </div>

            {/* Right - Hobbies */}
            <div className="mb-10 w-full px-4 lg:w-1/2">
              <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white lg:text-4xl">
                My Hobbies 🎨
              </h3>
              <p className="mb-6 text-base font-medium text-secondary lg:text-md">
                Kalau lagi nggak ngoding, biasanya aku:
              </p>
              <div className="space-y-3 text-base font-medium text-secondary lg:text-md leading-relaxed">
                <p>🍜 Berburu kuliner enak</p>
                <p>🎮 Main game biar stress ilang (kadang malah nambah 🤣)</p>
                <p>🎧 Dengerin musik random di Spotify</p>
                <p>📷 Iseng foto-foto buat stok feed (yang tetep kosong 🤫)</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* Portfolio Section Start */}
      <section
        id="portfolio"
        className="bg-slate-100 pb-16 pt-36 dark:bg-slate-800"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                Portfolio
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white">
                Projek Terbaru
              </h2>
              <p className="font-medium text-secondary">
                Inilah beberapa karya yang saya buat dengan hati, logika, dan sedikit
                sentuhan desain. Setiap kode punya cerita. 💻✨
              </p>
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img src={portfolioRSKM} alt="RSKM" className="w-full" />
              </div>
              <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
                ERM RSKM (2023-2025)
              </h3>
              <p className="text-base font-medium text-secondary">
                Projek gede ini aku kerjain bareng tim buat bikin sistem rekam medis elektronik di Rumah Sakit 
                Kristen Mojowarno. Jadi semua data pasien — dari IGD, rawat jalan, rawat inap, lab, radiologi, 
                farmasi sampai billing — nyambung jadi satu. Intinya biar dokter & perawat nggak ribet lagi, 
                pasien juga lebih cepat dilayani. 🏥💻  
                Selain itu, sistem ini juga udah diintegrasikan dengan <span className="font-semibold text-dark dark:text-white">Satu Sehat </span>  
                untuk memenuhi standar Kementerian Kesehatan. 📡✅
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img src={portfolioFinna} alt="Finna" className="w-full" />
              </div>
              <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
                Finna (2022-2023)
              </h3>
              <p className="text-base font-medium text-secondary">
                Buat seperti monitoring sales dan penjualannya, tujuannya biar proses bisnis mereka lebih 
                gampang dipantau dan dikelola. Jadi nggak perlu ribet manual lagi, tinggal 
                klik-klik udah beres. 🍪📊
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img
                  src={portfolioTwitter}
                  alt="Twitter Sentiment"
                  className="w-full"
                />
              </div>
              <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
                Twitter Sentiment Analysis (2022)
              </h3>
              <p className="text-base font-medium text-secondary">
                Projek ini dibuat pas submission akhir di Kampus Merdeka bareng Universitas 
                Indonesia (AICI). Fungsinya simpel: cari keyword di Twitter, terus dicek 
                sentimennya—positif, negatif, atau netral. Kayak detektor mood netizen. 🤭
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img
                  src={portfolioWarehouse}
                  alt="Warehouse"
                  className="w-full"
                />
              </div>
              <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
                Warehouse Management (2022)
              </h3>
              <p className="text-base font-medium text-secondary">
                Buat monitoring gudang pupuk di PT Bersih Jaya. Intinya biar stok dan distribusi pupuk bisa lebih gampang dipantau, 
                nggak ribet lagi pakai cara manual. 🚛📦
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img
                  src={portfolioMaknaJiwa}
                  alt="Makna Jiwa"
                  className="w-full"
                />
              </div>
              <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
                Makna Jiwa (2021)
              </h3>
              <p className="text-base font-medium text-secondary">
                Projek ini lahir dari submission akhir di program Kampus Merdeka Dicoding. 
                Intinya bikin aplikasi yang bisa nemenin dan bantu orang lebih peduli sama 
                kesehatan mentalnya. ✨
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section End */}

      {/* Clients Section Start */}
      <section
        id="clients"
        className="bg-slate-800 pb-32 pt-36 dark:bg-slate-300"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                Clients
              </h4>
              <h2 className="mb-4l text-3xl font-bold text-white dark:text-dark">
                Yang pernah bekerja sama
              </h2>
              <p className="font-medium text-secondary">
                Selama perjalanan sebagai developer, aku sempat terlibat di berbagai project bersama klien dari
                perusahaan startup hingga enterprise.
              </p>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a
                href="#"
                className="mx-4 max-w-[120px] py-4 opacity-60 grayscale
              transition duration-500 hover:opacity-100 hover:grayscale-0
              lg:mx-6 xl:mx-8"
              >
                <img src={clientFinna} alt="Finna" />
              </a>
              <a
                href="#"
                className="mx-4 max-w-[120px] py-4 opacity-60 grayscale
              transition duration-500 hover:opacity-100 hover:grayscale-0
              lg:mx-6 xl:mx-8"
              >
                <img src={clientRSKM} alt="RSKM" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Clients Section End */}

      {/* Contact Section Start */}
      <section id="contact" className="pb-32 pt-36 dark:bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                Contact
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white">
                Feel free to contact me
              </h2>
              <p className="font-medium text-secondary">
                Terhubung dengan saya melalui platform berikut.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-xl space-y-6 text-center">
            {/* Email */}
            <a
            href="mailto:prasetyomuhammaddwi5@gmail.com"
            className="flex items-center justify-center gap-3 rounded-lg bg-slate-200 p-4 text-dark shadow hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
          >
            <img
              src="/src/assets/images/logo/gmail.png"
              alt="Email"
              className="h-6 w-6"
            />
            prasetyomuhammaddwi5@gmail.com
          </a>

            {/* Phone */}
            <a
              href="http://wa.me/6285826125994" target="_blank"
              className="flex items-center justify-center gap-3 rounded-lg bg-slate-200 p-4 text-dark shadow hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
            >
              <img
              src="/src/assets/images/logo/whatsapp.png"
              alt="WA"
              className="h-6 w-6"
              />
              Whatsapp Me
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/muhammad-dwi-prasetyo-33203721b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-lg bg-slate-200 p-4 text-dark shadow hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
            >
              <img
              src="/src/assets/images/logo/linkedin.png"
              alt="WA"
              className="h-6 w-6"
              />LinkedIn
            </a>
          </div>
        </div>
      </section>
      {/* Contact Section End */}

      {/* Footer Start */}
      <footer className="bg-dark pb-8 pt-16">
        <div className="container text-center">
          {/* Nama */}
          <h2 className="mb-3 text-2xl font-bold text-white">Dwi Prasetyo</h2>
          <p className="mb-6 text-slate-400">Programmer | Student | Tech Enthusiast</p>

          {/* Sosmed */}
          <div className="mb-6 flex justify-center gap-4">
              <a
                href="https://youtube.com"
                target="_blank"
                className="mr-3 flex h-9 w-9 items-center justify-center 
                  rounded-full border border-slate-300 hover:border-primary
                  hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  className="fill-white"
                >
                  <title>YouTube</title>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="mr-3 flex h-9 w-9 items-center justify-center 
                  rounded-full border border-slate-300 hover:border-primary
                  hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  className="fill-white"
                >
                  <title>Instagram</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="mr-3 flex h-9 w-9 items-center justify-center 
                  rounded-full border border-slate-300 hover:border-primary
                  hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  className="fill-white"
                >
                  <title>Twitter</title>
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                className="mr-3 flex h-9 w-9 items-center justify-center 
                  rounded-full border border-slate-300 hover:border-primary
                  hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  className="fill-white"
                >
                  <title>TikTok</title>
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-primary">Dwi Prasetyo</span>. 
            Built with <span className="text-sky-500 font-bold">Tailwind CSS</span>.
          </p>
        </div>
      </footer>
      {/* Footer End */}

      {/* Back to Top Start */}
      <a
        href="#home"
        id="to-top"
        className="fixed bottom-4 right-4 z-[9999] 
        hidden h-14 w-14 items-center justify-center
        rounded-full bg-primary p-4 hover:animate-pulse"
      >
        <span className="mt-2 block h-5 w-5 rotate-45 border-l-2 border-t-2"></span>
      </a>
      {/* Back to Top End */}
    </>
  );
}

export default App;
