import { motion } from "framer-motion";
import TechStack from "./TechStack";

function About() {
  const experiences = [
    { year: "prevista per 02-2026", title: "Laurea in Ingegneria Informatica", description: "Laurea triennale presso l'Università degli studi di Modena e Reggio Emilia " },
    { year: "2022", title: "Stage Frontend Developer", description: "HTML + CSS + Wordpress per interfacce moderne e responsive in ambiente aziendale." },
    { year: "2023 - Attuale", title: "Freelance", description: "Siti e webapp per piccole attività, attenzione a UI/UX e performance." },
    { year: "2024", title: "Erasmus", description: "Erasmus universitario in Germania." },

    
  ];

  const stack = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js",
    "C", "C++", "C#", "Unity", "Git", "Python",
    "Dart", "Flutter", "MS SQL Server", "MongoDB", "TailwindCSS", "Bootstrap"
  ];

  return (
    <>
      
      <section className="bg-gray-900 text-gray-300 px-6 py-16 flex flex-col items-center">
        <h2 className="text-5xl font-extrabold tracking-wide text-blue-500 mb-3">
          EXPERIENCE
        </h2>
        <p className="max-w-3xl text-center text-lg mb-12 text-gray-400">
          Il mio percorso professionale: crescita, sfide e progetti che mi hanno formato.
        </p>

        
        <div className="w-full max-w-3xl md:hidden">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 border-l border-gray-700 pb-10 last:pb-0"
            >
              <span className="absolute left-0 top-6 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full ring-8 ring-gray-900"></span>
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:border-blue-500/50 transition">
                <span className="text-sm font-semibold text-blue-400">{exp.year}</span>
                <h3 className="text-xl font-semibold text-white mt-1">{exp.title}</h3>
                <p className="mt-3 text-gray-400">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        
        <div className="hidden md:block relative w-full max-w-5xl">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gray-700"></div>
          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const leftSide = i % 2 === 0;
              return (
                <div key={i} className="grid grid-cols-[1fr_40px_1fr] items-start gap-6">
                  <div className={leftSide ? "pr-6" : "invisible"}>
                    {leftSide && (
                      <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-blue-500/50 transition"
                      >
                        <span className="text-sm font-semibold text-blue-400">{exp.year}</span>
                        <h3 className="text-2xl font-semibold text-white mt-1">{exp.title}</h3>
                        <p className="mt-3 text-gray-400">{exp.description}</p>
                      </motion.div>
                    )}
                  </div>

                  <div className="relative h-full">
                    <span className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full ring-8 ring-gray-900"></span>
                  </div>

                  <div className={leftSide ? "invisible" : "pl-6"}>
                    {!leftSide && (
                      <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-blue-500/50 transition"
                      >
                        <span className="text-sm font-semibold text-blue-400">{exp.year}</span>
                        <h3 className="text-2xl font-semibold text-white mt-1">{exp.title}</h3>
                        <p className="mt-3 text-gray-400">{exp.description}</p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/CV.pdf"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition"
          >
            Scarica il mio CV
          </a>
        </div>
      </section>


<TechStack />

    </>
  );
}

export default About;
