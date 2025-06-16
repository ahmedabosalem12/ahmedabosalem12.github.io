import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-grey-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Clinic Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">DS</span>
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">Dr. Ahmed Salem</h3>
                <p className="text-grey-300">Medical Center</p>
              </div>
            </div>
            
            <p className="text-grey-300 mb-6 leading-relaxed">
              Providing exceptional medical care with over 15 years of experience. 
              Our commitment to personalized healthcare ensures that every patient 
              receives the attention and treatment they deserve.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="text-grey-300">123 Medical Center Drive, Suite 200, New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="text-grey-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="text-grey-300">info@drahmedsalem.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-grey-300 hover:text-primary-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-grey-300 hover:text-primary-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('appointment')}
                  className="text-grey-300 hover:text-primary-400 transition-colors"
                >
                  Book Appointment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-grey-300 hover:text-primary-400 transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-grey-300 hover:text-primary-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              <Clock className="w-5 h-5 inline mr-2" />
              Office Hours
            </h4>
            <div className="space-y-2 text-grey-300">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8AM - 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9AM - 2PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
              <div className="pt-2 border-t border-grey-700">
                <p className="text-primary-400 font-medium">Emergency care available 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 pt-8 border-t border-grey-700">
          <h4 className="text-lg font-semibold mb-6">Our Services</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-grey-300 text-sm">
            <span>General Consultation</span>
            <span>Cardiology</span>
            <span>Chronic Disease Management</span>
            <span>Preventive Medicine</span>
            <span>Medication Management</span>
            <span>Executive Health</span>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-grey-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <span className="text-grey-300">Follow us:</span>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-grey-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-grey-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-grey-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-grey-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-grey-300 text-sm text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end space-x-1">
              <span>© {currentYear} Dr. Ahmed Salem Medical Center. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by Ahmed Salem</span>
            </p>
            <p className="mt-1">All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;