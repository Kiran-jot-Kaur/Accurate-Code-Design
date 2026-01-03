import { CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#F4F4F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-600 mb-8">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-[#3282B8]" />
                <span className="text-gray-700">Quick response time</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-[#3282B8]" />
                <span className="text-gray-700">Free consultation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-[#3282B8]" />
                <span className="text-gray-700">Flexible pricing</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3282B8] focus:outline-none" 
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3282B8] focus:outline-none" 
                  placeholder="your@email.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3282B8] focus:outline-none" 
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button 
                onClick={handleSubmit}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#0F4C75] to-[#3282B8] text-white rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact
