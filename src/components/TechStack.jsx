import { motion } from "framer-motion";

// Import SVG locali per le icone non disponibili su CDN
import JavaIcon from "../assets/icons/java.svg";
import CSharpIcon from "../assets/icons/csharp.svg";
import CssIcon from "../assets/icons/css3.svg";
import SqlServerIcon from "../assets/icons/mssql.svg";

const stack = [
  { name: "HTML", url: "https://cdn.simpleicons.org/html5/FF5722" },
  { name: "CSS", icon: CssIcon },
  { name: "JavaScript", url: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "Java", icon: JavaIcon },
  { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Node.js", url: "https://cdn.simpleicons.org/node.js/339933" },
  { name: "Express.js", url: "https://cdn.simpleicons.org/express/000000" },
  { name: "C", url: "https://cdn.simpleicons.org/c/00599C" },
  { name: "C++", url: "https://cdn.simpleicons.org/cplusplus/00599C" },
  { name: "C#", icon: CSharpIcon },
  { name: "Unity", url: "https://cdn.simpleicons.org/unity/000000" },
  { name: "Git", url: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Python", url: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Dart", url: "https://cdn.simpleicons.org/dart/0175C2" },
  { name: "Flutter", url: "https://cdn.simpleicons.org/flutter/02569B" },
  { name: "MS SQL Server", icon: SqlServerIcon },
  { name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "TailwindCSS", url: "https://cdn.simpleicons.org/tailwindcss/38BDF8" },
  { name: "Bootstrap", url: "https://cdn.simpleicons.org/bootstrap/7952B3" },
];

function TechStack() {
  return (
    <section className="bg-gray-900 text-gray-300 px-6 py-16 flex flex-col items-center">
      <h2 className="text-5xl font-extrabold tracking-wide text-blue-500 mb-10">
        TECH STACK
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center">
        {stack.map((tech, i) => (
          <motion.div
            key={tech.name}
            whileHover={{
              scale: 1.2,
              y: -10,
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: i * 0.03 }}
            className="flex flex-col items-center bg-gray-800/70 backdrop-blur rounded-2xl px-6 py-5 shadow-lg border border-gray-700 cursor-pointer transition-all"
          >
            {tech.url && (
              <img src={tech.url} alt={tech.name} className="w-12 h-12 mb-3" />
            )}
            {tech.icon && (
              <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-3" />
            )}
            <span className="text-sm font-medium text-gray-200">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
