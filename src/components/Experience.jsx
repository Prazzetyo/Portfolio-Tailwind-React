import React, { useState } from 'react';

const experiences = [
  {
    id: 1,
    title: "Programmer",
    company: "PT Abna Samanhudi Sautika Husada",
    period: "Oct 2025 - Present",
    type: "Contract",
    location: "On-site",
    achievements: [
      "Developing and maintaining a Hospital Management Information System (SIMRS), implementing new features and modules based on end-user requirements and feedback",
      "Maintaining and troubleshooting SATUSEHAT integration, with a primary focus on the radiology module to ensure data compliance with Ministry of Health standards",
      "Ensuring data accuracy before submission",
      "Setting up and configuring a DICOM server for radiology image transmission and storage (PACS)"
    ],
    tech: ["MySQL", "HTML", "Satu Sehat API", "Node Js", "Postgresql", "PHP"]
  },
  {
    id: 2,
    title: "Fullstack Developer",
    company: "PT. Surya Jawara Eco",
    period: "Aug 2025 - Present",
    type: "Freelance",
    location: "Kab. Malang, Indonesia",
    achievements: [
      "Developed ERP desktop application into modern web app using Laravel and Bootstrap",
      "Improved system accessibility and responsiveness across devices",
      "Designed and implemented master data modules",
      "Performed frontend slicing to establish stable foundation for future feature development",
      "Participated in feature planning and team meetings to align implementation with business needs",
      "Delivered modern ERP web system for efficient team collaboration and workflow"
    ],
    tech: ["Laravel", "PHP", "Bootstrap", "MySQL", "PostgreSQL", "API Integration", "Git"]
  },
  {
    id: 3,
    title: "Full-stack Developer",
    company: "Rumah Sakit Kristen Mojowarno",
    period: "Jul 2023 - Oct 2025",
    type: "Contract",
    location: "Mojowarno, East Java (Hybrid)",
    achievements: [
      "Led team in building EMR system",
      "Integrated hospital departments (IGD, rawat jalan, rawat inap, lab, radiologi, farmasi, billing)",
      "Implemented SATUSEHAT integration"
    ],
    tech: ["MySQL", "HTML", "Full-stack Development", "Satu Sehat"]
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Global IT Support",
    period: "Jul 2022 - Feb 2023",
    type: "Freelance",
    location: "",
    achievements: [
      "Developed digital signage system for TVs/screens",
      "Built API documentation for integrations"
    ],
    tech: ["API Testing", "Digital Signage"]
  },
  {
    id: 5,
    title: "Web Developer & Backend Developer",
    company: "PT. Sekar Laut, Tbk. (Finna Food)",
    period: "May 2022 - Feb 2023",
    type: "Freelance",
    location: "",
    achievements: [
      "Developed sales monitoring system for Finna Food",
      "Ensured system integration with Finna processes"
    ],
    tech: ["MySQL", "HTML", "Backend Development"]
  },
  {
    id: 6,
    title: "Fullstack Web Developer",
    company: "PT Bersih Jaya",
    period: "Feb 2022 - Feb 2023",
    type: "Freelance",
    location: "",
    achievements: [
      "Developed warehouse inventory management system",
      "Ensured system integration with PT Bersih Jaya processes"
    ],
    tech: ["MySQL", "HTML", "Inventory System"]
  },
  {
    id: 7,
    title: "SIB Kampus Merdeka Internship",
    company: "PT Intelegensi Artifisial Indonesia",
    period: "Feb 2022 - Aug 2022",
    type: "Internship",
    location: "Pancoran Mas, West Java",
    achievements: ["AI Talents program participation"],
    tech: ["HTML"]
  },
  {
    id: 8,
    title: "Studi Independen Kampus Merdeka",
    company: "Dicoding Indonesia",
    period: "Aug 2021 - Jan 2022",
    type: "Internship",
    location: "Bandung, West Java",
    achievements: ["Front-end & Back-end development training"],
    tech: ["HTML", "CSS"]
  },
  {
    id: 9,
    title: "Project Manager",
    company: "CV Prima Cipta Teknologi",
    period: "Dec 2018 - Jan 2019",
    type: "Apprenticeship",
    location: "",
    achievements: [
      "Built employee timeline management web",
      "Coordinated team for project execution",
      "Documented features and usage procedures"
    ],
    tech: ["CodeIgniter", "Project Management"]
  },
  {
    id: 10,
    title: "Backend Developer",
    company: "PT. Universal Big Data",
    period: "Nov 2017 - Nov 2018",
    type: "Internship",
    location: "",
    achievements: [
      "Built E-Akademico (Linksmart) REST API",
      "API testing and documentation"
    ],
    tech: ["HTML", "CodeIgniter", "REST API"]
  }
];

const certifications = [
  { id: 1, title: "Project Management Fundamentals", issuer: "IBM", issued: "Nov 2025", link: "https://www.credly.com/badges/dfe90b7e-4350-4899-8c1c-4f310157ae5b/linked_in_profile" },
  { id: 2, title: "Web Development Fundamentals", issuer: "IBM", issued: "Nov 2025", link: "https://www.credly.com/badges/ae59465b-f634-4c84-9123-c6239822cfe0/linked_in_profile" },
  { id: 3, title: "Belajar Membuat Front-End Web untuk Pemula", issuer: "Dicoding Indonesia", issued: "Nov 2025", expired: "Nov 2028", link: "https://www.dicoding.com/certificates/RVZKG759OXD5" },
  { id: 4, title: "Belajar Dasar Pemrograman JavaScript", issuer: "Dicoding Indonesia", issued: "Nov 2025", expired: "Nov 2028", link: "https://www.dicoding.com/certificates/81P25667NPOY" },
  { id: 5, title: "Belajar Dasar Pemrograman Web", issuer: "Dicoding Indonesia", issued: "Nov 2025", expired: "Nov 2028", link: "https://www.dicoding.com/certificates/1OP8JVW2VPQK" },
  { id: 6, title: "Belajar Dasar AI", issuer: "Dicoding Indonesia", issued: "Nov 2025", expired: "Nov 2028", link: "https://www.dicoding.com/certificates/53XEK3N8KXRN" },
  { id: 7, title: "Belajar Membuat Aplikasi Web dengan React", issuer: "Dicoding Indonesia", issued: "Nov 2023", expired: "Nov 2026", link: "https://www.dicoding.com/certificates/EYX4KRJY6PDL" }
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState(null);
  const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);

  return (
    <section id="experience" className="bg-white pb-32 pt-36 dark:bg-dark">
      <div className="container">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <h4 className="mb-2 text-lg font-semibold uppercase text-primary">Experience & Certifications</h4>
          <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white">Perjalanan Karier & Sertifikat</h2>
          <p className="font-medium text-secondary">Menggabungkan pengalaman kerja, magang, dan sertifikasi aktif.</p>
        </div>

        <div className="mb-16">
          <h3 className="mb-8 text-2xl font-bold text-dark dark:text-white">💼 Pengalaman Kerja</h3>
          <div className="relative border-l-2 border-primary dark:border-blue-500 ml-4">
            {experiences.map((exp) => (
              <div key={exp.id} className="mb-8 ml-8">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-white dark:border-blue-500 dark:bg-dark"></div>
                <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-secondary">
                  <span className="bg-primary/10 px-2 py-1 rounded text-primary dark:bg-blue-500/20 dark:text-blue-300">{exp.period}</span>
                  {exp.type && <span className="bg-slate-200 px-2 py-1 rounded text-slate-700 dark:bg-slate-700 dark:text-slate-300">{exp.type}</span>}
                  {exp.location && <span className="text-slate-500 dark:text-slate-400">{exp.location}</span>}
                </div>
                <h3 className="text-xl font-bold text-dark dark:text-white">{exp.title}</h3>
                <h4 className="text-lg font-semibold text-primary dark:text-blue-400 mb-3">{exp.company}</h4>
                <button onClick={() => toggleExpand(exp.id)} className="mb-3 text-primary font-semibold hover:underline dark:text-blue-400">
                  {expandedId === exp.id ? "Tampilkan lebih sedikit" : "Lihat detail pencapaian"}
                </button>
                {expandedId === exp.id && (
                  <div className="mb-4 animate-fadeIn">
                    <ul className="space-y-2 mb-3 text-base text-secondary dark:text-slate-300">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="flex items-start"><span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary dark:bg-blue-500"></span>{a}</li>
                      ))}
                    </ul>
                    {exp.tech && <div className="flex flex-wrap gap-2">{exp.tech.map((t, i) => <span key={i} className="rounded bg-slate-100 px-2 py-1 text-sm text-slate-600 dark:bg-slate-700 dark:text-slate-300">{t}</span>)}</div>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-2xl font-bold text-dark dark:text-white">📜 Sertifikat Aktif</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-500/10 dark:to-purple-500/10"></div>
                <div className="relative z-10">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary dark:text-blue-400">{cert.issuer}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-slate-500 dark:text-slate-400">{cert.issued}</span>
                      <svg className="h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  </div>
                  <h4 className="mb-4 text-base font-bold leading-tight text-dark dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">{cert.title}</h4>
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3 dark:border-slate-700">
                    <span className="text-xs rounded bg-green-100 px-2.5 py-1 font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">Aktif</span>
                    {cert.expired && <span className="text-xs text-slate-500 dark:text-slate-400">Berlaku sampai {cert.expired}</span>}
                  </div>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-primary to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.213 10.788a3 3 0 11-4.243-4.242 3 3 0 014.243 4.242zM14.95 13.77a3 3 0 11-4.243-4.242 3 3 0 014.243 4.242zM19 11a.5.5 0 01-.5-.5v-7a.5.5 0 011 0v7a.5.5 0 01-.5.5zM7 4a.5.5 0 01.5-.5h13a.5.5 0 010 1H7.5A.5.5 0 017 4z"></path></svg>
                    Verifikasi Sertifikat
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}