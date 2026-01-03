import { Code, Menu } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import blackLogo from '../../assets/blackLogo.svg';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <img src={blackLogo} alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-[#3282B8]">ACD</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#3282B8] transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-[#3282B8] transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-[#3282B8] transition-colors">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-[#3282B8] transition-colors">Portfolio</a>
            <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-[#0F4C75] to-[#3282B8] text-white rounded-full hover:shadow-lg transition-all">Contact Us</a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#3282B8]">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#home" className="block py-2 text-gray-700 hover:text-[#3282B8]">Home</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-[#3282B8]">About</a>
            <a href="#services" className="block py-2 text-gray-700 hover:text-[#3282B8]">Services</a>
            <a href="#portfolio" className="block py-2 text-gray-700 hover:text-[#3282B8]">Portfolio</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-[#3282B8]">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};


export default Navbar
