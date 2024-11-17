import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <div  className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div id='hero' className="flex justify-center  h-svh  items-center">
          <div className=" mb-12 h-fit  min-w-[400px] w-fit max-w-[900px]">
            <h1 className="text-5xl md:text-[80px] font-bold text-center text-black mb-6">
            La Finance Islamique au service de votre
              <span className="text-yellow-500"> Avenir</span>
            </h1>
            <p className="text-xl text-center text-gray-600 mb-8">
            Investissez de manière éthique et responsable grâce à nos solutions halal.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors flex items-center">
                Prenez rendez-vous dès aujourd’hui
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors">
                Découvrez nos solutions
              </button>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
}