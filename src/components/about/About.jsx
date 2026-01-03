import { Code, Github, Linkedin, Palette, Twitter } from 'lucide-react';
import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#F4F4F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">Meet The Founders</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Two passionate professionals united by a vision to deliver exceptional digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="w-32 h-32 bg-gradient-to-br from-[#0F4C75] to-[#3282B8] rounded-full mx-auto mb-6 flex items-center justify-center">
              <Code className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A2E] text-center mb-2">Founder Name 1</h3>
            <p className="text-[#3282B8] text-center font-semibold mb-4">Lead Developer & Co-Founder</p>
            <p className="text-gray-600 text-center leading-relaxed">
              Expert in full-stack development with 5+ years of experience building scalable web applications. Specializes in React, Node.js, and modern web technologies.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#3282B8] hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#3282B8] hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#3282B8] hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="w-32 h-32 bg-gradient-to-br from-[#0F4C75] to-[#3282B8] rounded-full mx-auto mb-6 flex items-center justify-center">
              <Palette className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A2E] text-center mb-2">Founder Name 2</h3>
            <p className="text-[#3282B8] text-center font-semibold mb-4">Creative Director & Co-Founder</p>
            <p className="text-gray-600 text-center leading-relaxed">
              Passionate UI/UX designer with an eye for detail and user-centric approach. Creates beautiful, intuitive interfaces that users love to interact with.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#3282B8] hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#3282B8] hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#3282B8] hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About
