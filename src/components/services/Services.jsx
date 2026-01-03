import { Code, Palette, Smartphone, TrendingUp } from 'lucide-react';
import React from 'react'

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      desc: "Custom websites and web applications built with modern technologies for optimal performance."
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      desc: "Beautiful, intuitive interfaces that provide exceptional user experiences and drive engagement."
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Apps",
      desc: "Native and cross-platform mobile applications that work seamlessly across all devices."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Brand Design",
      desc: "Complete branding solutions including logos, color schemes, and visual identity guidelines."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-[#F4F4F9] rounded-2xl p-8 hover:bg-gradient-to-br hover:from-[#0F4C75] hover:to-[#3282B8] transition-all hover:shadow-2xl transform hover:-translate-y-2">
              <div className="text-[#3282B8] group-hover:text-white transition-colors mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] group-hover:text-white transition-colors mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Services
