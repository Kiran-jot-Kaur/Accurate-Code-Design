import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group relative overflow-hidden rounded-2xl bg-gray-200 h-64 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C75] to-[#3282B8] opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="text-2xl font-bold mb-2">Project {item}</h3>
                  <p className="text-sm">Web Development</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio
