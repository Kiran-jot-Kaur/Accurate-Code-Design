import React from 'react'

const TechStack = () => {
  const technologies = ['React', 'Tailwind', 'Node.js', 'MongoDB', 'Figma', 'Git'];

  return (
    <section className="py-20 bg-[#F4F4F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">Technologies We Use</h2>
          <p className="text-xl text-gray-600">Cutting-edge tools to build powerful solutions</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow">
              <span className="text-xl font-semibold text-gray-700">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack
