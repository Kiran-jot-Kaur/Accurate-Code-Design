import { Code, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import React from 'react'
import blackLogo from '../../assets/blackLogo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A2E] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={blackLogo} alt="Logo" className="w-8 h-8" />
              <span className="text-xl font-bold">Accurate C&D</span>
            </div>
            <p className="text-gray-400">Crafting digital excellence through expert coding and design solutions.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white">About</a>
              <a href="#services" className="block text-gray-400 hover:text-white">Services</a>
              <a href="#portfolio" className="block text-gray-400 hover:text-white">Portfolio</a>
              <a href="#contact" className="block text-gray-400 hover:text-white">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3282B8] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3282B8] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3282B8] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3282B8] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Accurate Coding & Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer
