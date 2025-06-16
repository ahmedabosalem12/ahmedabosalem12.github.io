import React, { useState } from 'react';
import { Menu, X, Phone, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">DS</span>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-grey-800">Dr. Ahmed Salem</h1>
              <p className="text-sm text-grey-600">Medical Center</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-grey-600 hover:text-primary-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-grey-600 hover:text-primary-600 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-grey-600 hover:text-primary-600 transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-grey-600 hover:text-primary-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-grey-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-grey-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Mon-Fri 8AM-6PM</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-grey-600 hover:text-primary-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-grey-600 hover:text-primary-600 hover:bg-grey-50 rounded-md transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-grey-600 hover:text-primary-600 hover:bg-grey-50 rounded-md transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-3 py-2 text-grey-600 hover:text-primary-600 hover:bg-grey-50 rounded-md transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-grey-600 hover:text-primary-600 hover:bg-grey-50 rounded-md transition-colors"
              >
                Contact
              </button>
            </div>
            <div className="mt-4 pt-4 border-t border-grey-100 space-y-2">
              <div className="flex items-center space-x-2 text-grey-600 px-3">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-grey-600 px-3">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Mon-Fri 8AM-6PM</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;