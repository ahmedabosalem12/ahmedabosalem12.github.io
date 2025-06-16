import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Dr. Salem is incredibly thorough and caring. He takes the time to listen to my concerns and explains everything clearly. I've never felt more confident in my healthcare.",
      condition: "Diabetes Management"
    },
    {
      name: "Michael Chen",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Outstanding medical care with a personal touch. Dr. Salem helped me manage my heart condition with a comprehensive treatment plan that has improved my quality of life significantly.",
      condition: "Cardiovascular Care"
    },
    {
      name: "Emily Rodriguez",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The preventive care program has been life-changing. Dr. Salem's approach to wellness has helped me maintain optimal health and catch potential issues early.",
      condition: "Preventive Medicine"
    },
    {
      name: "Robert Thompson",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Professional, knowledgeable, and genuinely cares about his patients. The clinic environment is comfortable and the staff is exceptional. Highly recommend!",
      condition: "General Practice"
    },
    {
      name: "Lisa Park",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Dr. Salem's expertise in chronic disease management has been invaluable. His holistic approach and ongoing support have made managing my condition much easier.",
      condition: "Chronic Care"
    },
    {
      name: "David Wilson",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The executive health program is perfect for my busy schedule. Comprehensive care with flexible appointment times and thorough health assessments.",
      condition: "Executive Health"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-grey-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-grey-800 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-grey-600 max-w-3xl mx-auto">
            Read testimonials from our satisfied patients who have experienced 
            exceptional care and improved health outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-grey-50 rounded-xl p-8 relative hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4 pt-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-grey-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Patient Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-grey-800">{testimonial.name}</h4>
                  <p className="text-sm text-primary-600">{testimonial.condition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-primary-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-primary-600 mb-2">5000+</h3>
              <p className="text-grey-600">Happy Patients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary-600 mb-2">15+</h3>
              <p className="text-grey-600">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary-600 mb-2">4.9/5</h3>
              <p className="text-grey-600">Patient Rating</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary-600 mb-2">24/7</h3>
              <p className="text-grey-600">Emergency Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;