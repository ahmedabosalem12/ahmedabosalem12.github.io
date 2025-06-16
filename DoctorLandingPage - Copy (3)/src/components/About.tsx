import React from 'react';
import { Award, Heart, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Professional fitness coach"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-teal-500 to-yellow-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-500 to-teal-500 rounded-full opacity-20"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Meet Your
                <span className="block bg-gradient-to-r from-teal-600 to-yellow-600 bg-clip-text text-transparent">
                  Transformation Coach
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                With over a decade of experience in fitness and wellness, I've dedicated my life to helping 
                people unlock their potential and achieve their health goals. My approach combines science-based 
                training with personalized nutrition and mindset coaching.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I believe that true transformation happens when you address not just the physical aspects, 
                but also the mental and emotional components of health and fitness.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Certified Trainer</h3>
                  <p className="text-sm text-gray-600">NASM, ACSM, Precision Nutrition</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Wellness Expert</h3>
                  <p className="text-sm text-gray-600">Holistic Health & Mindset</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-yellow-500 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Goal Specialist</h3>
                  <p className="text-sm text-gray-600">Weight Loss & Muscle Building</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Performance Coach</h3>
                  <p className="text-sm text-gray-600">Athletic & Sports Training</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-teal-50 to-yellow-50 p-6 rounded-xl border-l-4 border-teal-500">
              <p className="text-lg text-gray-700 italic mb-2">
                "Fitness isn't about being better than someone else. It's about being better than you were yesterday."
              </p>
              <p className="text-sm text-gray-600 font-semibold">- My Philosophy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;