
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-black">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070')`,
          filter: 'brightness(0.6)',
          transform: isVisible ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 8s ease-out'
        }}
      />
      
      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl backdrop-blur-sm p-8 rounded-xl bg-white/10"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
            >
              Uw Exclusieve Keukenspecialist
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-2xl md:text-3xl mb-6 text-white/90"
            >
              Kwaliteitskeukens voor elk interieur
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg mb-8 text-white/80"
            >
              Bij Keukenhelden zijn we trots om u hoogwaardige keukens aan te bieden. Wij kunnen u voorzien van een uitgebreid Belgisch keukenassortiment in diverse kleuren en materialen, perfect afgestemd op uw wensen en interieur.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-black transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('showroom')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Bekijk Onze Showroom <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/20 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Neem Contact Op
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating data elements - inspired by your reference UI */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-md p-4 rounded-xl text-white hidden md:block"
      >
        <div className="text-sm opacity-70 mb-1">Klanttevredenheid</div>
        <div className="text-3xl font-bold">96%</div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.7 }}
        className="absolute bottom-12 left-12 bg-white/10 backdrop-blur-md p-4 rounded-xl text-white hidden md:block"
      >
        <div className="text-sm opacity-70 mb-1">CO₂-neutraal sinds</div>
        <div className="text-3xl font-bold">2017</div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
