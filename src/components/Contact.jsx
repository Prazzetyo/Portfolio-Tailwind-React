import React from 'react'
import logoGmail from "../../src/assets/images/logo/gmail.png";
import logoWa from "../../src/assets/images/logo/whatsapp.png";
import logoLinkedin from "../../src/assets/images/logo/linkedin.png";

export default function Contact() {
  return (
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
              src={logoGmail}
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
              src={logoWa}
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
              src={logoLinkedin}
              alt="Linkedin"
              className="h-6 w-6"
              />LinkedIn
            </a>
          </div>
        </div>
      </section>
  )
}
