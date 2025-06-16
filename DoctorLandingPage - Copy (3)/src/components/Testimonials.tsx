import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Executive",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "Working with this coach completely changed my relationship with fitness. I lost 35 pounds in 6 months and gained so much confidence. The personalized approach made all the difference!",
      results: "Lost 35 lbs in 6 months"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "As someone who spent years making excuses, I finally found the motivation and structure I needed. The program is challenging but achievable, and the support is incredible.",
      results: "Gained 15 lbs muscle"
    },
    {
      name: "Lisa Rodriguez",
      role: "Small Business Owner",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "I was skeptical about online coaching, but this exceeded all my expectations. The nutrition guidance alone was worth it, and I've never felt stronger or more energetic.",
      results: "Improved energy & strength"
    },
    {
      name: "David Thompson",
      role: "Teacher",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "After struggling with my weight for years, I finally found a sustainable approach. The mindset coaching was just as important as the physical training. Life-changing experience!",
      results: "Lost 50 lbs & maintained"
    },
    {
      name: "Amanda Foster",
      role: "Nurse",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "The holistic approach to wellness really sets this coaching apart. It's not just about workouts - it's about creating a lifestyle that supports long-term health and happiness.",
      results: "Complete lifestyle transformation"
    },
    {
      name: "James Wilson",
      role: "Sales Manager",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "I've worked with several trainers before, but none provided the level of personalization and support I received here. The results speak for themselves - best shape of my life at 45!",
      results: "Best shape at 45"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real People,
            <span className="block bg-gradient-to-r from-teal-600 to-yellow-600 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what my clients have to say about their 
            transformation journeys and the results they've achieved.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="w-8 h-8 text-teal-500" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Results Badge */}
              <div className="inline-block bg-gradient-to-r from-teal-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {testimonial.results}
              </div>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-teal-50 to-yellow-50 rounded-2xl p-8 border border-teal-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">2,500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">50,000+</div>
              <div className="text-gray-600">Pounds Lost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;