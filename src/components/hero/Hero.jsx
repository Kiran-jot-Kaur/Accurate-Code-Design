import { ArrowRight } from 'lucide-react';
import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F4C75] pt-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3282B8] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0F4C75] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Excellence</span>
            </h1>
            <p className="text-xl text-gray-300">
              Expert coding and design solutions that transform your vision into stunning digital experiences. We build, you succeed.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-white text-[#1A1A2E] rounded-full font-semibold hover:shadow-2xl transition-all flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#portfolio" className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#1A1A2E] transition-all">
                View Work
              </a>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold">40+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-gray-400 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="w-full h-96 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 transform hover:scale-105 transition-transform">
                <div className="space-y-4">
                  <div className="h-4 bg-white/20 rounded w-3/4"></div>
                  <div className="h-4 bg-white/20 rounded w-1/2"></div>
                  <div className="h-32 bg-gradient-to-br from-[#3282B8]/30 to-[#0F4C75]/30 rounded-xl mt-6"></div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="h-20 bg-white/10 rounded-xl"></div>
                    <div className="h-20 bg-white/10 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero
