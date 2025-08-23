import React, { useState, useEffect } from 'react';
import templates from '../data/templates';
import { useNavigate } from 'react-router-dom';

const TemplateGallery = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Fixed Navbar - Same as Homepage */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900 tracking-tight">
            <a href="/" className="hover:text-gray-700 transition-colors">
              ResumeGenie
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/#about' },
              { name: 'Features', href: '/#features' },
              { name: 'Templates', href: '/templates' },
              { name: 'Start', href: '/#start' }
            ].map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="text-gray-900 focus:outline-none p-2 hover:bg-gray-50 rounded-md transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
            <nav className="flex flex-col py-4 space-y-3 text-sm font-medium px-6">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/#about' },
                { name: 'Features', href: '/#features' },
                { name: 'Templates', href: '/templates' },
                { name: 'Start', href: '/#start' }
              ].map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  onClick={() => setMenuOpen(false)} 
                  className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="bg-white min-h-screen pt-24 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Choose Your Perfect Resume Template
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Preview and select from 50+ stunning, professional resume templates.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {templates.map(template => (
              <div
                key={template.id}
                className="group bg-white border border-gray-200 transition-all duration-300 hover:shadow-lg cursor-pointer"
                onClick={() => navigate(`/builder/${template.id}`)}
              >
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-gray-900 font-semibold text-lg mb-1">{template.title}</h3>
                  <p className="text-sm text-gray-500 font-medium mb-2">{template.category}</p>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{template.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-12 text-sm text-gray-500 border-t border-gray-200 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="font-light">
            © 2025 ResumeGenie. Built with passion for dream careers.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TemplateGallery;
