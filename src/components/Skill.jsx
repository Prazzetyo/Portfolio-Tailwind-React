import React from 'react';

const skills = [
  "Laravel", "PHP", "MySQL", "PostgreSQL", "API Integration", "Bootstrap", 
  "HTML", "CSS", "JavaScript", "Git", "GitHub", "Linux", "Docker"
];

export default function Skill() {
  return (
    <section id="skill" className="py-24 bg-white dark:bg-dark">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h4 className="mb-2 text-lg font-semibold uppercase text-primary">My Skills</h4>
          <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white">Technologies I Use</h2>
          <p className="font-medium text-secondary">Core technologies and tools in my development stack.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.map((skill) => (
            <span 
              key={skill} 
              className="inline-flex items-center justify-center rounded-full bg-slate-100 px-5 py-2.5 font-semibold text-dark transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:text-white dark:bg-slate-700 dark:text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}