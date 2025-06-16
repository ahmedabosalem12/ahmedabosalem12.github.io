import React from 'react';
import { Wrench, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="h-8 w-8 text-accent-500" />
              <span className="text-xl font-bold">Ahmed Salem Engineering</span>
            </div>
            <p className="text-primary-300 mb-6 leading-relaxed max-w-md">
              Building tomorrow's infrastructure with innovative engineering solutions. 
              Committed to excellence, sustainability, and engineering precision in every project.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-primary-800 p-2 rounded-lg hover:bg-accent-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-800 p-2 rounded-lg hover:bg-accent-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-800 p-2 rounded-lg hover:bg-accent-500 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-primary-300">
                <Phone className="h-4 w-4 mr-2 text-accent-500" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-primary-300">
                <Mail className="h-4 w-4 mr-2 text-accent-500" />
                contact@ahmedsalemeng.com
              </li>
              <li className="flex items-start text-primary-300">
                <MapPin className="h-4 w-4 mr-2 text-accent-500 mt-0.5" />
                <span>123 Engineering Plaza<br />Suite 456, City 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-400 text-sm">
              © {currentYear} Ahmed Salem Engineering Consultancy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-400 hover:text-accent-500 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-400 hover:text-accent-500 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-primary-400 hover:text-accent-500 text-sm transition-colors duration-200">
                Certifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;