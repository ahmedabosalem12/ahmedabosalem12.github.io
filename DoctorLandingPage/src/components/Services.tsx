import React from 'react';
import { Building2, Cog, Hammer, Zap, Shield, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Building2,
      title: 'Civil Engineering',
      description: 'Comprehensive infrastructure design including roads, bridges, and urban planning with sustainable solutions.',
      features: ['Infrastructure Design', 'Urban Planning', 'Structural Analysis', 'Environmental Impact']
    },
    {
      icon: Cog,
      title: 'Mechanical Engineering',
      description: 'Advanced mechanical systems design, HVAC solutions, and industrial equipment optimization.',
      features: ['HVAC Systems', 'Industrial Design', 'Energy Efficiency', 'System Optimization']
    },
    {
      icon: Hammer,
      title: 'Structural Engineering',
      description: 'Expert structural analysis and design for buildings, bridges, and complex architectural projects.',
      features: ['Building Design', 'Seismic Analysis', 'Load Calculations', 'Safety Assessments']
    },
    {
      icon: Zap,
      title: 'Electrical Engineering',
      description: 'Complete electrical system design, power distribution, and smart building technologies.',
      features: ['Power Systems', 'Smart Buildings', 'Automation', 'Energy Management']
    },
    {
      icon: Shield,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery and quality assurance.',
      features: ['Timeline Management', 'Quality Control', 'Risk Assessment', 'Cost Optimization']
    },
    {
      icon: Users,
      title: 'Consulting Services',
      description: 'Expert consultation for complex engineering challenges and feasibility studies.',
      features: ['Feasibility Studies', 'Technical Reviews', 'Compliance Consulting', 'Expert Testimony']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            Engineering Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering solutions tailored to meet your project requirements with 
            industry-leading expertise and innovative approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="bg-accent-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-100 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-accent-500" />
                </div>
                
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;