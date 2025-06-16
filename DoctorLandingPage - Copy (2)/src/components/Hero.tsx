import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="relative z-10 container-max section-padding py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Expert Legal
              <span className="block text-blue-200">Representation</span>
              You Can Trust
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Providing exceptional legal services with integrity, dedication, and results-driven advocacy for over 15 years.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="btn-primary flex items-center justify-center group"
              >
                Get Legal Advice
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <a 
                href="tel:+1234567890" 
                className="btn-secondary flex items-center justify-center group"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (123) 456-7890
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-200">15+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200">500+</div>
                <div className="text-sm text-blue-100">Cases Won</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200">98%</div>
                <div className="text-sm text-blue-100">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="lg:justify-self-end">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional lawyer in office"
                className="lazy-image rounded-lg shadow-2xl w-full max-w-md mx-auto"
                data-loaded="true"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;