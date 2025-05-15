
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const EcoSection: React.FC = () => {
  const benefits = [
    {
      title: "Milieuvriendelijke productie",
      description: "Gemaakt van tot 90% gerecyclede materialen",
      icon: "🌱"
    },
    {
      title: "Uitstekende kwaliteit",
      description: "Dezelfde duurzaamheid en stijl als traditionele keukens",
      icon: "✨"
    },
    {
      title: "Unieke uitstraling",
      description: "Elke keuken heeft een karakteristiek uiterlijk",
      icon: "🎨"
    },
    {
      title: "Circulaire economie",
      description: "Draagt bij aan een wereld met minder afval",
      icon: "♻️"
    },
    {
      title: "Gezond binnenklimaat",
      description: "Lage emissie voor een gezonde leefomgeving",
      icon: "🍃"
    }
  ];

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
              Eco Gerecyclede Keukens
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De toekomst van keukendesign
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg">
              Keukenhelden loopt voorop in duurzame innovatie met hun exclusieve lijn eco gerecyclede keukens. Deze revolutionaire keukens worden vervaardigd uit hoogwaardig gerecycled materiaal, waardoor de ecologische voetafdruk aanzienlijk wordt verkleind.
            </p>
            
            <p className="text-lg">
              Door te kiezen voor een eco gerecyclede keuken van Keukenhelden maakt u niet alleen een stijlvolle keuze voor uw woning, maar draagt u ook actief bij aan een duurzamere toekomst.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-black text-white p-6 rounded-xl"
            >
              <div className="text-sm mb-1 opacity-80">CO₂ besparing</div>
              <div className="text-4xl font-bold mb-1">72%</div>
              <div className="text-sm opacity-80">minder uitstoot dan traditionele keukens</div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2070" 
              alt="Eco gerecyclede keuken van Keukenhelden" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Voordelen van onze eco gerecyclede keukens
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">{benefit.icon}</div>
                    <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EcoSection;
