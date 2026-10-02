import React from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackTop() {
  return (
    <a
      href="#home"
      id="to-top"
      className="group fixed bottom-4 right-4 z-[9999] flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:shadow-xl active:scale-95"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
      <span className="absolute right-full mr-3 hidden rounded-md bg-slate-900 px-2.5 py-1 text-xs font-medium text-white shadow-md group-hover:block dark:bg-slate-100 dark:text-slate-900 whitespace-nowrap">
        Ke Atas
      </span>
    </a>
  )
}
