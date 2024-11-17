import React from 'react';

export default function Stats() {
  return (
    <div className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-yellow-500 mb-2">$2.5B+</div>
            <div className="text-gray-300">Assets Managed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-500 mb-2">50K+</div>
            <div className="text-gray-300">Active Investors</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-500 mb-2">25%</div>
            <div className="text-gray-300">Average Returns</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-500 mb-2">15+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}