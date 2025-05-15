
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    toast({
      title: "Bericht verzonden",
      description: "Wij nemen zo spoedig mogelijk contact met u op.",
    });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Neem contact met ons op
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bent u geïnteresseerd in een nieuwe keuken of wilt u meer informatie? Neem dan contact met ons op of bezoek onze showroom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Stuur ons een bericht</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Naam</Label>
                  <Input id="name" name="name" placeholder="Uw naam" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" name="email" type="email" placeholder="uw@email.nl" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefoonnummer</Label>
                <Input id="phone" name="phone" placeholder="Uw telefoonnummer" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Bericht</Label>
                <Textarea id="message" name="message" placeholder="Uw vraag of opmerking" rows={5} required />
              </div>
              <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
                Verzenden
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Contactgegevens</h3>
            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-center p-6">
                  <MapPin className="h-10 w-10 text-gray-400 mr-4" />
                  <div>
                    <h4 className="font-bold mb-1">Adres</h4>
                    <p>Keukenlaan 123</p>
                    <p>1234 AB Amsterdam</p>
                    <p>Nederland</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center p-6">
                  <Phone className="h-10 w-10 text-gray-400 mr-4" />
                  <div>
                    <h4 className="font-bold mb-1">Telefoon</h4>
                    <p><a href="tel:+31612345678" className="hover:underline">+31 6 12345678</a></p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center p-6">
                  <Mail className="h-10 w-10 text-gray-400 mr-4" />
                  <div>
                    <h4 className="font-bold mb-1">E-mail</h4>
                    <p><a href="mailto:info@keukenhelden.nl" className="hover:underline">info@keukenhelden.nl</a></p>
                  </div>
                </CardContent>
              </Card>

              <div className="p-6 bg-gray-100 rounded-lg">
                <h4 className="font-bold mb-2">Openingstijden</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>Maandag - Vrijdag:</div>
                  <div>09:00 - 18:00</div>
                  <div>Zaterdag:</div>
                  <div>10:00 - 17:00</div>
                  <div>Zondag:</div>
                  <div>Gesloten</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
