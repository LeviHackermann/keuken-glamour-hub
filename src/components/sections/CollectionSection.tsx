
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';

const CollectionSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Mix & Match collectie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creëer uw perfecte keuken door kleuren en materialen te combineren
            </p>
          </motion.div>
        </div>

        <div className="mb-12">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-center max-w-4xl mx-auto"
          >
            Het keukensysteem van Keukenhelden is een uitgekiend concept waarbij alle modellen, kleuren, materialen en afwerkingen op een heldere en eenvoudige manier zijn ingedeeld. Door deze flexibiliteit kunnen wij voor u de perfecte keuken samenstellen die exact bij uw wensen en stijl past.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl overflow-hidden"
        >
          <Tabs defaultValue="keukens" className="w-full">
            <TabsList className="grid w-full grid-cols-2 rounded-none border-b bg-transparent p-0">
              <TabsTrigger 
                value="keukens"
                className="rounded-none border-b-2 border-transparent py-4 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Keukens
              </TabsTrigger>
              <TabsTrigger 
                value="bijkeukens"
                className="rounded-none border-b-2 border-transparent py-4 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Bijkeukens
              </TabsTrigger>
            </TabsList>
            <TabsContent value="keukens" className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2070" 
                    alt="Moderne keuken" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-sm font-semibold mb-1">Modern & minimalistisch</div>
                    <div className="text-xl font-bold">Elegante details</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Keukens voor elke stijl</h3>
                  <p className="text-lg mb-4">
                    Van minimalistisch tot landelijk, van industrieel tot klassiek. Het uitgebreide assortiment biedt voor elke smaak en interieur de perfecte keuken.
                  </p>
                  <p className="text-lg">
                    Dankzij ons Mix & Match systeem kunt u verschillende kleuren, materialen en afwerkingen combineren voor een uniek resultaat dat perfect bij uw woning past.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    {["Modern", "Klassiek", "Landelijk", "Industrieel", "Minimalistisch"].map((style, index) => (
                      <div key={index} className="px-3 py-1 text-sm bg-black text-white rounded-full">
                        {style}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="bijkeukens" className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070" 
                    alt="Functionele bijkeuken" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-sm font-semibold mb-1">Praktisch & functioneel</div>
                    <div className="text-xl font-bold">Extra opbergruimte</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Keuken én bijkeuken</h3>
                  <p className="text-lg mb-4">
                    Naast prachtige keukens bieden wij ook complete bijkeukenopstellingen aan. Een praktische bijkeuken vormt de ideale aanvulling op uw keuken en biedt extra opbergruimte en functionaliteit.
                  </p>
                  <p className="text-lg">
                    Onze bijkeukens worden met dezelfde aandacht voor detail en kwaliteit ontworpen als onze keukens, zodat u kunt genieten van een naadloze overgang tussen beide ruimtes.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="font-bold mb-1">Opbergruimte</div>
                      <div className="text-sm text-gray-600">Maximale benutting van de ruimte</div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="font-bold mb-1">Functionaliteit</div>
                      <div className="text-sm text-gray-600">Praktisch ingedeeld voor dagelijks gebruik</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-black text-white rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Techniek & Montagegemak
          </h3>
          <p className="text-lg max-w-3xl mx-auto">
            De kwaliteit van een keuken van Keukenhelden uit zich niet alleen in duurzaamheid en afwerking, maar ook in het montagegemak. Een echte kwaliteitskeuken komt ook moeiteloos in elkaar. De montagehandleidingen zijn beschikbaar in het Nederlands, Engels en Frans.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CollectionSection;
