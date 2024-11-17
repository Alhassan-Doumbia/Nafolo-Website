import React from 'react';

export default function CTA() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-yellow-500 rounded-2xl p-12 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <h2 className="text-4xl font-bold text-black mb-6">
            Prêt à commencer votre voyage financier halal ?
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Nous sommes là pour vous aider à atteindre vos objectifs financiers de manière responsable et halal
              devenez un futur investisseur confiant en son avenir financier . 
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors">
              Réservez un entretien 
            </button>
          </div>
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" />
              <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}