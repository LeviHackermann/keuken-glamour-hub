
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CollectionSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mix & Match collectie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creëer uw perfecte keuken door kleuren en materialen te combineren
          </p>
        </div>

        <div className="mb-12">
          <p className="text-lg mb-6">
            Het keukensysteem van Keukenhelden is een uitgekiend concept waarbij alle modellen, kleuren, materialen en afwerkingen op een heldere en eenvoudige manier zijn ingedeeld. Door deze flexibiliteit kunnen wij voor u de perfecte keuken samenstellen die exact bij uw wensen en stijl past.
          </p>
        </div>

        <Tabs defaultValue="keukens" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="keukens">Keukens</TabsTrigger>
            <TabsTrigger value="bijkeukens">Bijkeukens</TabsTrigger>
          </TabsList>
          <TabsContent value="keukens" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <img 
                  src="/placeholder.svg" // Replace with actual kitchen image
                  alt="Moderne keuken" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Keukens voor elke stijl</h3>
                <p className="text-lg mb-4">
                  Van minimalistisch tot landelijk, van industrieel tot klassiek. Het uitgebreide assortiment biedt voor elke smaak en interieur de perfecte keuken.
                </p>
                <p className="text-lg">
                  Dankzij ons Mix & Match systeem kunt u verschillende kleuren, materialen en afwerkingen combineren voor een uniek resultaat dat perfect bij uw woning past.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="bijkeukens" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <img 
                  src="/placeholder.svg" // Replace with actual utility room image
                  alt="Functionele bijkeuken" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Keuken én bijkeuken</h3>
                <p className="text-lg mb-4">
                  Naast prachtige keukens bieden wij ook complete bijkeukenopstellingen aan. Een praktische bijkeuken vormt de ideale aanvulling op uw keuken en biedt extra opbergruimte en functionaliteit.
                </p>
                <p className="text-lg">
                  Onze bijkeukens worden met dezelfde aandacht voor detail en kwaliteit ontworpen als onze keukens, zodat u kunt genieten van een naadloze overgang tussen beide ruimtes.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 p-8 bg-gray-100 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">
            Techniek & Montagegemak
          </h3>
          <p className="text-lg max-w-3xl mx-auto">
            De kwaliteit van een keuken van Keukenhelden uit zich niet alleen in duurzaamheid en afwerking, maar ook in het montagegemak. Een echte kwaliteitskeuken komt ook moeiteloos in elkaar. De montagehandleidingen zijn beschikbaar in het Nederlands, Engels en Frans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
