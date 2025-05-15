
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const EcoSection: React.FC = () => {
  const benefits = [
    {
      title: "Milieuvriendelijke productie",
      description: "Gemaakt van tot 90% gerecyclede materialen"
    },
    {
      title: "Uitstekende kwaliteit",
      description: "Dezelfde duurzaamheid en stijl als traditionele keukens"
    },
    {
      title: "Unieke uitstraling",
      description: "Elke keuken heeft een karakteristiek uiterlijk door het gebruik van gerecyclede materialen"
    },
    {
      title: "Circulaire economie",
      description: "Draagt bij aan een wereld met minder afval en grondstoffenverbruik"
    },
    {
      title: "Gezond binnenklimaat",
      description: "Lage emissie van schadelijke stoffen voor een gezonde leefomgeving"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Eco Gerecyclede Keukens
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De toekomst van keukendesign
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-6">
              Keukenhelden loopt voorop in duurzame innovatie met hun exclusieve lijn eco gerecyclede keukens. Deze revolutionaire keukens worden vervaardigd uit hoogwaardig gerecycled materiaal, waardoor de ecologische voetafdruk aanzienlijk wordt verkleind.
            </p>
            
            <p className="text-lg">
              Door te kiezen voor een eco gerecyclede keuken van Keukenhelden maakt u niet alleen een stijlvolle keuze voor uw woning, maar draagt u ook actief bij aan een duurzamere toekomst.
            </p>
          </div>
          
          <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" // Replace with actual eco kitchen image
              alt="Eco gerecyclede keuken van Keukenhelden" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-6">
          Voordelen van onze eco gerecyclede keukens
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 border-gray-200 hover:border-black transition-colors">
              <CardContent className="pt-6">
                <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcoSection;
