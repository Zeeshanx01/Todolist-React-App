// components/Footer.js
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleRedirect = () => {
    window.open("https://github.com/Zeeshanx01", "_blank", "noopener,noreferrer");
  };

  const handleSourceCode = () => {
    window.open("https://github.com/Zeeshanx01/Todolist-React-App", "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:flex md:items-center md:justify-between">
          {/* Branding section */}
          <div className="flex justify-center space-x-6 md:order-2">
            <Link to="/" className="group relative">
              <span className="sr-only">Home</span>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-sky-600 bg-clip-text text-transparent 
                            hover:from-sky-600 hover:to-cyan-400 transition-all duration-500">
                MyPortfolio
              </h2>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-sky-600 
                            group-hover:w-full transition-all duration-300"></div>
            </Link>
          </div>

          {/* Navigation links */}
          <div className="mt-8 md:mt-0 md:order-1">
            <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
              {['projects', 'about', 'blog', 'contact'].map((path) => (
                <Link
                  key={path}
                  to={`/${path}`}
                  className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors
                            relative group"
                >
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div className="mt-8 flex flex-col items-center space-y-4 md:order-3">
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com/in/zeeshan-munir-b073a51b9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors 
                          p-2 rounded-full hover:bg-cyan-400/10"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              
              <a
                href="mailto:zeeshan.x01000@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors
                          p-2 rounded-full hover:bg-cyan-400/10"
              >
                <FaEnvelope className="h-6 w-6" />
              </a>
              
              <a
                href="https://instagram.com/zeeshan_x01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors
                          p-2 rounded-full hover:bg-cyan-400/10"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>

            {/* GitHub Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleRedirect}
                className="bg-gray-800 rounded-full p-3 hover:bg-cyan-400/20 
                         transition-colors flex items-center group"
              >
                <FaGithub className="h-6 w-6 group-hover:text-cyan-400 transition-colors" />
              </button>

              <button
                onClick={handleSourceCode}
                className="bg-gray-800 rounded-full px-6 py-3 hover:bg-cyan-400/20 
                         transition-colors flex items-center space-x-2 group"
              >
                <FaCode className="h-6 w-6 group-hover:text-cyan-400 transition-colors" />
                <span className="text-sm group-hover:text-cyan-400 transition-colors">Source Code</span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-gray-800 py-8 text-center">
          <p className="text-xs text-gray-400 hover:text-cyan-400 transition-colors">
            &copy; {currentYear} Zeeshan Munir. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-gray-400 hover:text-cyan-400 transition-colors">
            Built with ❤️ using React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;