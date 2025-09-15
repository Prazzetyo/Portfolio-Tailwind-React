import React from 'react'
import cvId from "../../src/assets/cv/cv-dwi-prasetyo-id.pdf";
import cvEn from "../../src/assets/cv/cv-dwi-prasetyo-en.pdf";

export default function About() {
  return (
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
                href={cvId}
                target="_blank"
                className="rounded-lg bg-primary px-6 py-3 text-white font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                >
                📄 CV Indonesia
                </a>
                <a
                href={cvEn}
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
  )
}
