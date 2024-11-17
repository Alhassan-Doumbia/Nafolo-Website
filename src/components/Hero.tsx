import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Unlock Your Financial
              <span className="text-yellow-500"> Potential</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert investment solutions tailored to your goals. Build wealth with confidence using our innovative platform and strategic insights.
            </p>
            <div className="flex gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors flex items-center">
                Start Investing <ArrowUpRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              alt="Investment Dashboard"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}