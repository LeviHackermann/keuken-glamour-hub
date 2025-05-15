
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] w-full bg-gray-100 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/placeholder.svg')`, // Replace with actual kitchen image
          filter: 'brightness(0.85)'
        }}
      />
      
      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-xl bg-white/90 p-8 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Uw Exclusieve Keukenspecialist
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">
              Kwaliteitskeukens voor elk interieur
            </h2>
            <p className="text-lg mb-8">
              Bij Keukenhelden zijn we trots om u hoogwaardige keukens aan te bieden. Als geautoriseerde retailer kunnen wij u voorzien van een uitgebreid Nederlands keukenassortiment in diverse kleuren en materialen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white"
                onClick={() => document.getElementById('showroom')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Bekijk Onze Showroom <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Neem Contact Op
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
