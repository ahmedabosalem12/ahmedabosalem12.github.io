import React from 'react';
import { Play, Star, Users, Trophy } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Fitness background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-yellow-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold">Certified Professional Trainer</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-transparent">
              Body & Mind
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands who've achieved their fitness goals with personalized coaching, 
            proven programs, and unwavering support.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-10 text-white">
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-teal-400" />
              <span className="text-lg font-semibold">2,500+ Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-400" />
              <span className="text-lg font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="w-6 h-6 text-teal-400" />
              <span className="text-lg font-semibold">10+ Years</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-teal-500 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-teal-600 hover:to-yellow-600 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 min-w-[200px]"
            >
              Start Your Journey
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 min-w-[200px] flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>View Programs</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;