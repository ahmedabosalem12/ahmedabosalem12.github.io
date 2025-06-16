import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6">
              Engineering Excellence for
              <span className="text-accent-500"> Tomorrow's Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Delivering innovative engineering solutions that build the foundation for progress. 
              From concept to completion, we transform visions into reality with precision and expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent-500" />
                <span className="text-gray-700">25+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent-500" />
                <span className="text-gray-700">500+ Projects Completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent-500" />
                <span className="text-gray-700">Industry Leading Standards</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-accent-500 text-white px-8 py-4 rounded-lg hover:bg-accent-600 transition-all duration-200 font-semibold flex items-center justify-center group"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#services"
                className="border-2 border-primary-900 text-primary-900 px-8 py-4 rounded-lg hover:bg-primary-900 hover:text-white transition-all duration-200 font-semibold text-center"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern skyscraper construction and engineering excellence"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-2xl"></div>
              
              {/* Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-500">500+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-500">25+</div>
                    <div className="text-sm text-gray-600">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-500">100%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;