
import React from 'react';

const CompanySection: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Waarom kiezen voor onze keukens van Keukenhelden?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Bij Keukenhelden zijn we trots om u hoogwaardige keukens aan te bieden. Als geautoriseerde retailer kunnen wij u voorzien van een uitgebreid Nederlands keukenassortiment in diverse kleuren en materialen, perfect afgestemd op uw wensen en interieur.
            </p>
            
            <ul className="space-y-2 list-disc pl-5 mb-6">
              <li>Uitgebreid Nederlands assortiment in talloze kleuren en materialen</li>
              <li>Levertijd vanaf slechts 10 werkdagen voor een snelle realisatie van uw droomkeuken</li>
              <li>Luxe Blum laden & korven met demping standaard inbegrepen voor extra gebruiksgemak</li>
              <li>Laserafkanting op alle melamine en hoogglans kunststof fronten voor een perfecte afwerking</li>
              <li>Maatwerkoplossingen mogelijk voor elke ruimte</li>
              <li>NCS-lakkleuren voor eindeloze mogelijkheden</li>
              <li>Duurzaam geproduceerde keukens - CO2-neutraal sinds 2017!</li>
            </ul>
          </div>
          
          <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" // Replace with actual kitchen image
              alt="Moderne keuken van Keukenhelden" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Duurzaamheid staat centraal
          </h3>
          <p className="text-lg">
            Bij Keukenhelden en bij ons staat duurzaamheid hoog in het vaandel. Alle keukens in ons assortiment worden CO2-neutraal geproduceerd. Onze leverancier heeft in juli 2023 het hoogste niveau (niveau 5) op de CO2-Prestatieladder behaald - het toonaangevende duurzaamheidsinstrument dat bedrijven helpt bij het structureel reduceren van CO2.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
