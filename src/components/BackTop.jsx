import React from 'react'

export default function BackTop() {
  return (
    <a
        href="#home"
        id="to-top"
        className="fixed bottom-4 right-4 z-[9999] 
        hidden h-14 w-14 items-center justify-center
        rounded-full bg-primary p-4 hover:animate-pulse"
      >
        <span className="mt-2 block h-5 w-5 rotate-45 border-l-2 border-t-2"></span>
      </a>
  )
}
