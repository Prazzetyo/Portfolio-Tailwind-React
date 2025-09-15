import React from "react";
import fotoDwi from "../assets/images/dwi.png";

export default function Hero() {
  return (
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
  );
}
