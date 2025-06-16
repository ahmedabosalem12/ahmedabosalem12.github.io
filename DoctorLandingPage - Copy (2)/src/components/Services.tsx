import React from 'react';
import { Users, Building, Scale, FileText, Heart, Briefcase } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Heart,
      title: 'Family Law',
      description: 'Compassionate legal support for divorce, custody, adoption, and family matters.',
      features: ['Divorce & Separation', 'Child Custody', 'Adoption Services', 'Prenuptial Agreements']
    },
    {
      icon: Building,
      title: 'Corporate Law',
      description: 'Comprehensive business legal services for companies of all sizes.',
      features: ['Business Formation', 'Contract Negotiations', 'Compliance', 'Mergers & Acquisitions']
    },
    {
      icon: Scale,
      title: 'Civil Litigation',
      description: 'Strong advocacy in court for complex civil disputes and litigation.',
      features: ['Personal Injury', 'Contract Disputes', 'Property Law', 'Employment Law']
    },
    {
      icon: FileText,
      title: 'Estate Planning',
      description: 'Protect your legacy with comprehensive estate planning services.',
      features: ['Wills & Trusts', 'Estate Administration', 'Tax Planning', 'Asset Protection']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Legal Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive legal services tailored to meet your specific needs with the highest level of professionalism and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <service.icon className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Need Legal Consultation?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Get expert legal advice tailored to your situation. Schedule a consultation today to discuss your case with our experienced attorneys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </button>
              <a 
                href="tel:+1234567890"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors"
              >
                Call (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;