function Projects() {
  const projects = [
    { 
      title: "Portfolio Website", 
      description: "Il mio sito personale in React + Tailwind", 
      link: "https://github.com/Sif247/Portfolio",
      technologies: [
        { name: "React", color: "#61DAFB" },
        { name: "TailwindCSS", color: "#38BDF8" },
        { name: "JavaScript", color: "#F7DF1E" },
      ]
    },
    { 
      title: "BMI Calculator", 
      description: "Calcolatore BMI con libreria Python Tkinter", 
      link: "https://github.com/Sif247/BMI-calculator",
      technologies: [
        { name: "Python", color: "#3776AB" },
        { name: "Tkinter", color: "#FF6F61" },
      ]
    },
    { 
      title: "Flappy Bird", 
      description: "Gioco Flappy Bird con Unity 2D", 
      link: "https://github.com/Sif247/Games-2D-Unity-Engine",
      technologies: [
        { name: "Unity", color: "#000000" },
        { name: "C#", color: "#239120" },
      ]
    },
    { 
      title: "Pokèdex Filtrabile", 
      description: "Pokèdex animato con barra di ricerca e filtraggio in tempo reale", 
      link: "https://github.com/Sif247/Pokedex",
      technologies: [
        { name: "React", color: "#61DAFB" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "CSS", color: "#2196F3" },
      ]
    },
    { 
      title: "Leetcode", 
      description: "Esercizi sugli algoritmi e strutture dati in Leetcode", 
      link: "https://github.com/Sif247/LeetCode",
      technologies: [
        { name: "Python", color: "#3776AB" },
        { name: "Java", color: "#007396" },
        { name: "C", color: "#00599C" },
        { name: "Dart", color: "#00B4AB" },
      ]
    },
    { 
      title: "STM32", 
      description: "Primi progetti con il microcontrollore STM32 scritti in C con libreria HAL", 
      link: "https://github.com/Sif247/STM32-Projects",
      technologies: [
        { name: "C", color: "#00599C" },
        { name: "STM32 HAL", color: "#FF6600" },
      ]
    },
  ];

  return (
    <section className="bg-gray-900 min-h-screen text-gray-300 px-6 py-12">
      <h2 className="text-5xl font-extrabold tracking-wide text-blue-500 mb-8 text-center">
        PROGETTI
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>

              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: tech.color }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            
            <div className="flex justify-end">
              <a 
                href={project.link} 
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition-all flex items-center gap-2"
              >
                Visualizza progetto
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
