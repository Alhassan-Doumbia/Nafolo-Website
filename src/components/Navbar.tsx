import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-yellow-500" />
            <span className="ml-2 text-xl font-bold text-black">WealthPeak</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-800 hover:text-yellow-500 transition-colors">Solutions</a>
            <a href="#" className="text-gray-800 hover:text-yellow-500 transition-colors">About</a>
            <a href="#" className="text-gray-800 hover:text-yellow-500 transition-colors">Services</a>
            <a href="#" className="text-gray-800 hover:text-yellow-500 transition-colors">Contact</a>
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}