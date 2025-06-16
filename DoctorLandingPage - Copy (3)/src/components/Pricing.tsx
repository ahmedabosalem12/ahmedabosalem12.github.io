import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 89,
      period: "month",
      description: "Perfect for beginners ready to start their fitness journey",
      features: [
        "2 personal training sessions/month",
        "Basic nutrition guidance",
        "Workout plan creation",
        "Email support",
        "Progress tracking app access"
      ],
      popular: false,
      color: "from-teal-500 to-teal-600"
    },
    {
      name: "Transformation",
      price: 199,
      period: "month",
      description: "Comprehensive program for serious fitness transformations",
      features: [
        "4 personal training sessions/month",
        "Custom meal planning",
        "Weekly check-ins",
        "24/7 text support",
        "Body composition analysis",
        "Supplement recommendations",
        "Group class access"
      ],
      popular: true,
      color: "from-yellow-500 to-teal-500"
    },
    {
      name: "Elite",
      price: 349,
      period: "month",
      description: "Ultimate coaching experience with unlimited access",
      features: [
        "Unlimited personal training",
        "Complete nutrition overhaul",
        "Daily coaching check-ins",
        "24/7 phone & text support",
        "Monthly DEXA scans",
        "Supplement protocol",
        "All group classes included",
        "Lifestyle coaching sessions"
      ],
      popular: false,
      color: "from-teal-500 to-yellow-500"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Investment in Your
            <span className="block bg-gradient-to-r from-teal-600 to-yellow-600 bg-clip-text text-transparent">
              Best Self
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the coaching package that fits your goals and budget. All plans include my personal 
            guarantee - if you don't see results in 90 days, get your money back.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                plan.popular ? 'transform scale-105 border-2 border-yellow-400' : 'hover:-translate-y-2'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-yellow-500 to-teal-500 text-white px-6 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                    <Star className="w-4 h-4" />
                    <span className="font-semibold text-sm">Most Popular</span>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-r ${plan.color} p-8 text-white text-center relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-white/90 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-xl text-white/80">/{plan.period}</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-yellow-500 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-yellow-500 to-teal-500 text-white hover:from-yellow-600 hover:to-teal-600'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  {plan.popular ? 'Start Transformation' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-yellow-500 rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">90-Day Results Guarantee</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            I'm so confident in my coaching methods that I offer a 90-day money-back guarantee. 
            If you don't see measurable results in your first 90 days, I'll refund your investment completely.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span>✓ No long-term contracts</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 100% satisfaction guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;