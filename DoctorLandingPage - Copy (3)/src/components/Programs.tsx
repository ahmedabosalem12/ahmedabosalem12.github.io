import React from 'react';
import { Clock, Users, Calendar, TrendingUp, Dumbbell, Heart } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Personal Training",
      description: "One-on-one coaching tailored to your specific goals and fitness level",
      features: ["Customized workout plans", "Nutrition guidance", "Progress tracking", "24/7 support"],
      icon: Dumbbell,
      duration: "60 mins",
      type: "1-on-1",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Group Fitness",
      description: "High-energy group sessions that combine fun with effective workouts",
      features: ["Motivating group dynamic", "Varied workout styles", "All fitness levels", "Community support"],
      icon: Users,
      duration: "45 mins",
      type: "Group",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Transformation Program",
      description: "Comprehensive 12-week program for complete body and lifestyle transformation",
      features: ["Meal planning", "Workout programs", "Mindset coaching", "Body composition tracking"],
      icon: TrendingUp,
      duration: "12 weeks",
      type: "Intensive",
      color: "from-teal-500 to-yellow-500"
    },
    {
      title: "Wellness Coaching",
      description: "Holistic approach focusing on mental health, stress management, and life balance",
      features: ["Stress management", "Sleep optimization", "Habit formation", "Life balance coaching"],
      icon: Heart,
      duration: "Ongoing",
      type: "Lifestyle",
      color: "from-yellow-500 to-teal-500"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-teal-600 to-yellow-600 bg-clip-text text-transparent">
              Fitness Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're just starting out or looking to take your fitness to the next level, 
            I have the perfect program designed to help you succeed.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${program.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10 flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                      <p className="text-white/90 text-lg">{program.description}</p>
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center ml-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Program Details */}
                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{program.type}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-gradient-to-br from-teal-500 to-yellow-500 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 group-hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-teal-50 to-yellow-50 rounded-2xl p-8 border border-teal-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not sure which program is right for you?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule a free consultation where we'll discuss your goals, assess your current fitness level, 
              and create a personalized plan that fits your lifestyle.
            </p>
            <button className="bg-gradient-to-r from-teal-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;