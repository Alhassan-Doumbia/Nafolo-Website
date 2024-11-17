import React from 'react';
import logo from "../assets/logo-nafolo.png"
export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img src={logo} alt="" className='w-[100px]' />
            </div>
            <p className="text-gray-600"> une entreprise ivoirienne spécialisée dans la création de solutions d’investissement conformes à la charia.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-yellow-500">Halal Capital</a></li>
              <li><a href="#" className="hover:text-yellow-500">Halal Trading</a></li>
              <li><a href="#" className="hover:text-yellow-500">La Bourse Communautaire </a></li>
            </ul>
          </div>
          {/* <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-500">Careers</a></li>
              <li><a href="#" className="hover:text-yellow-500">Press</a></li>
              <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </div> */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-yellow-500">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-yellow-500">Disclaimers</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Nafolo. Tout droit reservés. 
          </p>
          <p className='text-center text-gray-600'>
          Sites internet développé par Treez agency
          </p>
        </div>
      </div>
    </footer>
  );
}