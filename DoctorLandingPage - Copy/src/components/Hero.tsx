import React from 'react';
import { Award, GraduationCap, Users, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-grey-800 leading-tight mb-6">
              Professional Medical Care You Can
              <span className="text-primary-600"> Trust</span>
            </h1>
            <p className="text-xl text-grey-600 mb-8 leading-relaxed">
              Experience personalized healthcare with Dr. Ahmed Salem. Over 15 years of medical excellence, 
              providing comprehensive care in a comfortable, modern environment.
            </p>
            
            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-grey-800">15+ Years</p>
                  <p className="text-sm text-grey-600">Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-grey-800">Board Certified</p>
                  <p className="text-sm text-grey-600">Internal Medicine</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-grey-800">5000+</p>
                  <p className="text-sm text-grey-600">Patients Treated</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={scrollToAppointment}
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                View Services
              </button>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dr. Ahmed Salem - Professional Medical Doctor"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary-200 rounded-2xl -z-10"></div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-grey-800">Dr. Ahmed Salem</p>
                  <p className="text-sm text-grey-600">MD, Internal Medicine</p>
                  <p className="text-sm text-primary-600">Johns Hopkins University</p>
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