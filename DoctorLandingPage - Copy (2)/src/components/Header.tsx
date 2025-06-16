import React, { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Scale className={`h-8 w-8 ${isScrolled ? 'text-blue-800' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Legal Excellence
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-medium hover:underline transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-white hover:text-blue-200'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`font-medium hover:underline transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-white hover:text-blue-200'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`font-medium hover:underline transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-white hover:text-blue-200'
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`btn-primary ${isScrolled ? '' : 'bg-white text-blue-800 hover:bg-gray-100'}`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-800 font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-800 font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-blue-800 font-medium text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-800 font-medium text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;