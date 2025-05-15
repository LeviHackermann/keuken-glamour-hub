
import React from 'react';
import { motion } from 'framer-motion';

const CompanySection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
          Waarom kiezen voor onze keukens?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="prose max-w-none"
          >
            <p className="text-lg mb-6 text-gray-700">
              Bij Keukenhelden zijn we trots om u hoogwaardige keukens aan te bieden. Wij kunnen u voorzien van een uitgebreid Belgisch keukenassortiment in diverse kleuren en materialen, perfect afgestemd op uw wensen en interieur.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Uitgebreid Belgisch assortiment",
                "Levertijd vanaf slechts 10 werkdagen",
                "Luxe Blum laden & korven met demping",
                "Laserafkanting op alle fronten",
                "Maatwerkoplossingen voor elke ruimte",
                "NCS-lakkleuren voor eindeloze mogelijkheden",
                "Duurzaam geproduceerde keukens"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-2"
                >
                  <div className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070" 
              alt="Moderne keuken van Keukenhelden" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-sm font-semibold mb-1 opacity-90">Duurzaam & Hoogwaardig</div>
              <div className="text-xl font-bold">CO₂-neutraal sinds 2017</div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gray-50 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">
            Duurzaamheid staat centraal
          </h3>
          <p className="text-lg">
            Bij Keukenhelden staat duurzaamheid hoog in het vaandel. Alle keukens in ons assortiment worden CO2-neutraal geproduceerd. Onze leverancier heeft in juli 2023 het hoogste niveau (niveau 5) op de CO2-Prestatieladder behaald - het toonaangevende duurzaamheidsinstrument dat bedrijven helpt bij het structureel reduceren van CO2.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CompanySection;
