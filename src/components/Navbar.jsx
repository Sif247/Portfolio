import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Chi sono", path: "/about" },
    { name: "Progetti", path: "/projects" },
    { name: "Contatti", path: "/contacts" },
  ];

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-24 w-auto" />
          <h1 className="text-white text-2xl font-bold tracking-wide">Software Engineer</h1>
        </Link>

        
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`transition-colors duration-300 hover:text-blue-500 ${
                  location.pathname === link.path ? "text-blue-500 font-bold" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        
        <div
          className="md:hidden text-gray-300 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </div>
      </div>

      
      {isOpen && (
        <ul className="md:hidden bg-gray-800 text-gray-300 flex flex-col gap-4 px-6 py-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block transition-colors duration-300 hover:text-blue-500 ${
                  location.pathname === link.path ? "text-blue-500 font-bold" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
