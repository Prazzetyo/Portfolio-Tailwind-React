import React, { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import logoGmail from "../assets/images/logo/gmail.png";
import logoWa from "../assets/images/logo/whatsapp.png";
import logoLinkedin from "../assets/images/logo/linkedin.png";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-[76px] right-4 z-[9999] flex flex-col items-center gap-3">
      {/* Container for Contact Buttons with animation */}
      <div className={`flex flex-col gap-3 transition-all duration-500 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}`}>
        {/* Email */}
        <a
          href="mailto:prasetyomuhammaddwi5@gmail.com"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white p-2.5 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 dark:border-slate-700 dark:bg-slate-800"
          aria-label="Email"
        >
          <img src={logoGmail} alt="Email" className="h-6 w-6 object-contain" />
          <span className="absolute right-full mr-3 hidden rounded-md bg-slate-900 px-2.5 py-1 text-xs font-medium text-white shadow-md group-hover:block dark:bg-slate-100 dark:text-slate-900 whitespace-nowrap">Email</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/6285826125994"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white p-2.5 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 dark:border-slate-700 dark:bg-slate-800"
          aria-label="WhatsApp"
        >
          <img src={logoWa} alt="WhatsApp" className="h-6 w-6 object-contain" />
          <span className="absolute right-full mr-3 hidden rounded-md bg-slate-900 px-2.5 py-1 text-xs font-medium text-white shadow-md group-hover:block dark:bg-slate-100 dark:text-slate-900 whitespace-nowrap">WhatsApp</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/muhammad-dwi-prasetyo-33203721b/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white p-2.5 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 dark:border-slate-700 dark:bg-slate-800"
          aria-label="LinkedIn"
        >
          <img src={logoLinkedin} alt="LinkedIn" className="h-6 w-6 object-contain" />
          <span className="absolute right-full mr-3 hidden rounded-md bg-slate-900 px-2.5 py-1 text-xs font-medium text-white shadow-md group-hover:block dark:bg-slate-100 dark:text-slate-900 whitespace-nowrap">LinkedIn</span>
        </a>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-600 active:scale-95"
        aria-label="Toggle Contact"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}
