import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpeg";


function Home() {
  return (
    <section className="bg-gray-900 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-12 gap-6 md:gap-10">
      
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
          Ciao, sono<span className="text-blue-500"> SIF247</span>
        </h1>
        <p className="text-gray-300 mb-6 md:mb-8 max-w-md md:max-w-lg mx-auto md:mx-0">
          Il mio nome è Ismail Sifdine, sono un ingegnere informatico, appassionato di tecnologia a 360°: sviluppo web, mobile, AI, embedded e database per progetti moderni e funzionali.  
          Esplora i miei progetti e scopri cosa posso fare!
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a 
            href="/CV.pdf" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition"
          >
            Scarica il mio CV
          </a>
          <Link 
            to="/projects" 
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md transition"
          >
            I miei progetti
          </Link>
        </div>
      </div>

      
      <div className="flex-1 flex justify-center md:justify-end">
        <img src={heroImage} alt="Hero" className="w-100 h-32 md:w-64 md:w-120 h-auto rounded-xl shadow-2xl" />
      </div>

    </section>
  );
}

export default Home;
