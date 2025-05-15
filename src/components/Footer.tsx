
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Keukenhelden</h3>
            <p className="mb-4">Uw exclusieve keukenspecialist voor hoogwaardige, duurzame keukens in Nederland.</p>
            <div className="flex items-center mt-4">
              <img 
                src="/lovable-uploads/aa1a87b3-d719-4400-8024-16b3db4b87df.png" 
                alt="Keukenhelden Logo" 
                className="h-12 bg-white p-1 rounded"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navigatie</h3>
            <ul className="space-y-2">
              <li><NavLink to="/#company" className="hover:text-gray-300">Over Ons</NavLink></li>
              <li><NavLink to="/#showroom" className="hover:text-gray-300">Showroom</NavLink></li>
              <li><NavLink to="/#contact" className="hover:text-gray-300">Contact</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-gray-300">Blog</NavLink></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic">
              <p className="mb-2">Keukenlaan 123</p>
              <p className="mb-2">1234 AB Amsterdam</p>
              <p className="mb-2">Nederland</p>
              <p className="mb-2"><a href="tel:+31612345678" className="hover:text-gray-300">+31 6 12345678</a></p>
              <p><a href="mailto:info@keukenhelden.nl" className="hover:text-gray-300">info@keukenhelden.nl</a></p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p>&copy; {currentYear} Keukenhelden. Alle rechten voorbehouden.</p>
          <div className="mt-4 md:mt-0">
            <NavLink to="/privacy-policy" className="hover:text-gray-300 mr-4">Privacy Policy</NavLink>
            <NavLink to="/terms-of-service" className="hover:text-gray-300">Algemene Voorwaarden</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
