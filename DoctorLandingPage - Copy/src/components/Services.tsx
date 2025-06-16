import React from 'react';
import { 
  Heart, 
  Activity, 
  Shield, 
  Stethoscope, 
  Pill, 
  UserCheck,
  Clock,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "General Consultation",
      description: "Comprehensive health assessments and routine check-ups to maintain your optimal health.",
      features: ["Health screening", "Preventive care", "Medical history review"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cardiology",
      description: "Complete cardiovascular care including heart disease prevention and management.",
      features: ["ECG testing", "Blood pressure monitoring", "Heart health counseling"]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Chronic Disease Management",
      description: "Ongoing care and support for diabetes, hypertension, and other chronic conditions.",
      features: ["Treatment planning", "Regular monitoring", "Lifestyle guidance"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Preventive Medicine",
      description: "Proactive healthcare to prevent illness and maintain long-term wellness.",
      features: ["Vaccinations", "Health screenings", "Risk assessments"]
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: "Medication Management",
      description: "Expert guidance on medications, interactions, and optimal treatment protocols.",
      features: ["Prescription review", "Side effect monitoring", "Drug interaction checks"]
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Executive Health",
      description: "Comprehensive health programs designed for busy professionals and executives.",
      features: ["Annual physicals", "Corporate wellness", "Priority scheduling"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-grey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-grey-800 mb-4">
            Comprehensive Medical Services
          </h2>
          <p className="text-xl text-grey-600 max-w-3xl mx-auto">
            We provide a full range of medical services designed to meet your healthcare needs 
            with the highest standards of professional care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                <div className="text-primary-600">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-grey-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-grey-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    <span className="text-sm text-grey-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-bold text-grey-800 mb-2">Same-Day Appointments</h4>
              <p className="text-grey-600 text-sm">Available for urgent care needs</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-bold text-grey-800 mb-2">Insurance Accepted</h4>
              <p className="text-grey-600 text-sm">Most major insurance plans welcome</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-bold text-grey-800 mb-2">Personalized Care</h4>
              <p className="text-grey-600 text-sm">Tailored treatment plans for each patient</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;