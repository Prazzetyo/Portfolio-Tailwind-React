import React from 'react'

export default function About() {
  return (
    <section id="about" className="pb-32 pt-36 dark:bg-dark">
        <div className="container">
        <div className="flex flex-wrap items-start lg:flex-nowrap lg:gap-8">
            
            {/* Left - Profile */}
            <div className="w-full px-4 lg:w-1/2">
            <h4 className="mb-3 text-lg font-bold uppercase text-primary">
                Tentang Saya
            </h4>
            <h2 className="mb-5 max-w-md text-3xl font-bold text-dark dark:text-white lg:text-4xl">
                Programmer & Curious Learner
            </h2>
            <p className="max-w-xl text-base font-medium text-secondary lg:text-md leading-relaxed">
                Lebih sering ngoding daripada ngopi ☕. 
                Laravel udah jadi comfort zone, React.js side quest seru, dan 
                ASP.NET Core MVC petualangan terbaru. 
                Misi saya: bukan cuma nge-push commit, tapi juga nge-push semangat tim 🚀.
            </p>
            </div>

        </div>
        </div>
    </section>
  )
}