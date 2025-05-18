import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Social media URLs
  const socialLinks = [
    { 
      Icon: Facebook, 
      url: "https://www.facebook.com/dekeukenhelden",
      label: "Facebook" 
    },
    { 
      Icon: Instagram, 
      url: "https://www.instagram.com/dekeukenhelden",
      label: "Instagram" 
    },
    { 
      Icon: Linkedin, 
      url: "https://www.linkedin.com/company/dekeukenhelden",
      label: "LinkedIn" 
    }
  ];
  
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <NavLink to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/aa1a87b3-d719-4400-8024-16b3db4b87df.png" 
                alt="Keukenhelden Logo" 
                className="h-12 bg-white p-1 rounded"
              />
            </NavLink>
            <h3 className="text-2xl font-bold mb-4">Keukenhelden</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Uw exclusieve keukenspecialist voor hoogwaardige, duurzame keukens in België. Wij helpen u graag bij het realiseren van uw droomkeuken.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 transition-colors p-2 rounded-full"
                  aria-label={social.label}
                >
                  <social.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <h3 className="text-xl font-bold mb-6">Navigatie</h3>
            <ul className="space-y-3">
              {[
                { label: 'Over Ons', path: '/#company' },
                { label: 'Showroom', path: '/#showroom' },
                { label: 'Contact', path: '/#contact' },
                { label: 'Blog', path: '/blog' }
              ].map((item, index) => (
                <li key={index}>
                  <NavLink 
                    to={item.path} 
                    className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                <address className="not-italic text-gray-400">
                  <p>Vlaams-Brabant</p>
                  <p>Belgium</p>
                </address>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3" />
                <a href="tel:+32478447305" className="text-gray-400 hover:text-white transition-colors">
                  +32 478 44 73 05
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3" />
                <a href="mailto:info@dekeukenhelden.be" className="text-gray-400 hover:text-white transition-colors">
                  info@dekeukenhelden.be
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">&copy; {currentYear} Keukenhelden. Alle rechten voorbehouden.</p>
          <div className="flex flex-wrap gap-4">
            <NavLink to="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</NavLink>
            <NavLink to="/terms-of-service" className="text-gray-500 hover:text-white transition-colors">Algemene Voorwaarden</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
