import React from 'react';
import { CircleDollarSign, CandlestickChart, Landmark } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Landmark className="h-8 w-8 text-yellow-500" />,
      title: "Halal Capital",
      description: "Formation, conseils en bourse charia-conformes, Sukuks, et fonds de placement halal."
    },
    {
      icon: <CandlestickChart className="h-8 w-8 text-yellow-500" />,
      title: "Halal Trading",
      description: "Investissements éthiques dans l’agriculture, le transport, l’immobilier, etc."
    },
    {
      icon: <CircleDollarSign className="h-8 w-8 text-yellow-500" />,
      title: "La Bourse Communautaire",
      description: "Clubs d’investissements, fonds communs, et une communauté d’entrepreneurs halal."
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Nos services et produits</h2>
          <p className="text-xl text-gray-600">
            Explorez une gamme de produits conçus pour maximiser vos investissements tout en respectant vos valeurs.
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
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
