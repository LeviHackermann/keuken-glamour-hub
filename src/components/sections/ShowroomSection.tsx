
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ShowroomSection: React.FC = () => {
  // Real kitchen images uploaded by user
  const kitchenImages = [
    '/lovable-uploads/b12a794c-a45e-4fa6-87c5-a09f4bd81810.png',
    '/lovable-uploads/0b5af362-6551-4ca5-8ff1-206b4f1cee89.png',
    '/lovable-uploads/22aef2cd-ac39-470e-8651-7d80ea0c3293.png',
    '/lovable-uploads/c25ef9c8-e9cb-4eb2-b560-d0de37645867.png',
    '/lovable-uploads/e46e289a-2386-4184-90c1-032a26db3a10.png',
    '/lovable-uploads/5dc17629-1633-467f-90e1-30a5a72af533.png',
    '/lovable-uploads/f3d28e67-33f2-4b77-ad3e-1ecdec84070e.png',
    '/lovable-uploads/b7f2be2c-ff1c-4e0f-8298-3497eea2fd45.png',
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bezoek onze showroom
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek onze collectie hoogwaardige keukens in onze showroom
          </p>
        </div>

        <div className="mb-12">
          <p className="text-lg text-center mb-8">
            Wij nodigen u graag uit voor een bezoek aan onze showroom. Hier kunt u de verschillende keukenmodellen bekijken, de hoogwaardige materialen voelen en uzelf overtuigen van de kwaliteit. Onze adviseurs staan voor u klaar om al uw vragen te beantwoorden en u te helpen bij het vinden van uw droomkeuken.
          </p>

          <Carousel className="w-full">
            <CarouselContent>
              {kitchenImages.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative pb-[75%] rounded-lg overflow-hidden">
                    <img 
                      src={src}
                      alt={`Keuken voorbeeld ${index + 1}`} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="mr-2" />
              <CarouselNext />
            </div>
          </Carousel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Keuken én bijkeuken</h3>
            <p className="text-gray-700">
              Naast prachtige keukens bieden wij ook complete bijkeukenopstellingen aan. Een praktische bijkeuken vormt de ideale aanvulling op uw keuken en biedt extra opbergruimte en functionaliteit.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Techniek & Montagegemak</h3>
            <p className="text-gray-700">
              De kwaliteit van een keuken van Keukenhelden uit zich niet alleen in duurzaamheid en afwerking, maar ook in het montagegemak. Een echte kwaliteitskeuken komt ook moeiteloos in elkaar. De montagehandleidingen zijn beschikbaar in het Nederlands, Engels en Frans. Wij komen de keuken gratis monteren indien u dat wenst.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-black hover:bg-gray-800 text-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Maak een afspraak
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShowroomSection;
