import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Software Engineer. Tutti i diritti riservati.</p>
        
        <div className="flex gap-6">
          <a 
            href="https://github.com/Sif247" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transform hover:scale-125 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/Sif247" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transform hover:scale-125 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://instagram.com/Sif247" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-500 transform hover:scale-125 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
