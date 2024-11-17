import React from 'react';
import { BarChart2, Shield, Users, Wallet } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <BarChart2 className="h-8 w-8 text-yellow-500" />,
      title: "Data-Driven Insights",
      description: "Make informed decisions with real-time market analysis and predictive modeling."
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      title: "Secure Investments",
      description: "Bank-level security protocols protecting your assets and personal information."
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-500" />,
      title: "Expert Advisors",
      description: "Access to certified financial advisors for personalized guidance."
    },
    {
      icon: <Wallet className="h-8 w-8 text-yellow-500" />,
      title: "Portfolio Management",
      description: "Sophisticated tools for diversification and risk management."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Why Choose WealthPeak</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for your investment journey</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}