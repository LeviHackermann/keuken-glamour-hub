import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, Phone, Mail, Clock, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [gdprConsent, setGdprConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);
    
    if (!gdprConsent) {
      setFormError("U moet akkoord gaan met de verwerking van uw gegevens om het formulier te verzenden.");
      setIsSubmitting(false);
      return;
    }
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add consent information to form data
    formData.append('gdpr_consent', gdprConsent.toString());
    formData.append('marketing_consent', marketingConsent.toString());
    formData.append('consent_timestamp', new Date().toISOString());
    
    // Using the provided Formspree form ID
    const formspreeUrl = "https://formspree.io/f/xldbaqaj";
    
    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setFormSuccess(true);
        form.reset();
        setGdprConsent(false);
        setMarketingConsent(false);
        toast({
          title: "Bericht verzonden",
          description: "Wij nemen zo spoedig mogelijk contact met u op.",
        });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Er is iets misgegaan bij het verzenden van het formulier.");
      }
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Er is iets misgegaan bij het verzenden van het formulier.");
      toast({
        title: "Fout",
        description: "Er is iets misgegaan bij het verzenden van het formulier.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Adres",
      content: ["Vlaams-Brabant", "Belgium"],
      color: "bg-gradient-to-br from-gray-800 to-gray-900"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Telefoon",
      content: ["+32 478 44 73 05"],
      link: "tel:+32478447305",
      color: "bg-gradient-to-br from-gray-700 to-gray-800"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "E-mail",
      content: ["info@dekeukenhelden.be"],
      link: "mailto:info@dekeukenhelden.be",
      color: "bg-gradient-to-br from-gray-900 to-black"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Openingstijden",
      content: [
        "Maandag - Vrijdag: 09:00 - 18:00",
        "Zaterdag: 10:00 - 17:00",
        "Zondag: Gesloten"
      ],
      color: "bg-gradient-to-br from-gray-800 to-gray-900"
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
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Neem contact met ons op
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bent u geïnteresseerd in een nieuwe keuken of wilt u meer informatie? Neem dan contact met ons op of bezoek onze showroom.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Stuur ons een bericht</h3>
            
            {formSuccess ? (
              <Alert className="bg-green-50 border-green-200 mb-6">
                <AlertDescription className="text-green-800">
                  Uw bericht is succesvol verzonden. Wij nemen zo spoedig mogelijk contact met u op.
                </AlertDescription>
              </Alert>
            ) : (
              <>
                {formError && (
                  <Alert className="bg-red-50 border-red-200 mb-6">
                    <AlertDescription className="text-red-800">
                      {formError}
                    </AlertDescription>
                  </Alert>
                )}

                {/* GDPR Information Box */}
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Privacy en gegevensbescherming</h4>
                  <p className="text-sm text-blue-800 mb-2">
                    Wij respecteren uw privacy en verwerken uw persoonlijke gegevens in overeenstemming met de AVG/GDPR. 
                    Uw gegevens worden uitsluitend gebruikt om contact met u op te nemen over uw aanvraag.
                  </p>
                  <p className="text-sm text-blue-800">
                    Voor meer informatie over hoe wij uw gegevens verwerken, zie onze{' '}
                    <a href="/privacy-policy" className="underline font-medium">privacyverklaring</a>.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Naam *</Label>
                      <Input id="name" name="name" placeholder="Uw naam" required 
                        className="border-gray-300 focus:border-black focus:ring-black transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input id="email" name="email" type="email" placeholder="uw@email.nl" required 
                        className="border-gray-300 focus:border-black focus:ring-black transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefoonnummer</Label>
                    <Input id="phone" name="phone" placeholder="Uw telefoonnummer" 
                      className="border-gray-300 focus:border-black focus:ring-black transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Bericht *</Label>
                    <Textarea id="message" name="message" placeholder="Uw vraag of opmerking" rows={5} required 
                      className="border-gray-300 focus:border-black focus:ring-black transition-colors" />
                  </div>

                  {/* GDPR Consent Checkboxes */}
                  <div className="space-y-4 border-t pt-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="gdpr-consent" 
                        checked={gdprConsent}
                        onCheckedChange={(checked) => setGdprConsent(checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="gdpr-consent" className="text-sm leading-relaxed">
                        Ik ga akkoord met de verwerking van mijn persoonlijke gegevens door Keukenhelden 
                        voor het beantwoorden van mijn aanvraag, conform de{' '}
                        <a href="/privacy-policy" className="text-blue-600 underline">privacyverklaring</a>. *
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="marketing-consent" 
                        checked={marketingConsent}
                        onCheckedChange={(checked) => setMarketingConsent(checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="marketing-consent" className="text-sm leading-relaxed">
                        Ik wil graag op de hoogte gehouden worden van nieuwe producten, aanbiedingen en nieuws van Keukenhelden 
                        (optioneel - u kunt zich altijd uitschrijven).
                      </Label>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600">
                    * Verplichte velden. U heeft het recht om uw gegevens in te zien, te wijzigen of te verwijderen. 
                    Neem hiervoor contact met ons op via info@dekeukenhelden.be.
                  </p>

                  <Button 
                    type="submit" 
                    className="w-full bg-black hover:bg-gray-800 text-white transition-all duration-300"
                    disabled={isSubmitting || !gdprConsent}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verzenden...
                      </>
                    ) : (
                      "Verzenden"
                    )}
                  </Button>
                </form>
              </>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contactgegevens</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className={`h-full border-none shadow-lg overflow-hidden ${card.color}`}>
                    <CardContent className="p-6 text-white">
                      <div className="mb-4">{card.icon}</div>
                      <h4 className="font-bold text-xl mb-3">{card.title}</h4>
                      <div className="space-y-1">
                        {card.content.map((line, i) => (
                          <p key={i}>
                            {card.link ? (
                              <a href={card.link} className="hover:underline">{line}</a>
                            ) : (
                              line
                            )}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-6 bg-gray-50 p-6 rounded-xl"
            >
              <h4 className="font-bold mb-4">We helpen u graag verder</h4>
              <p className="text-gray-700">
                Onze keukenspecialisten staan klaar om al uw vragen te beantwoorden en om u te helpen bij het vinden van uw droomkeuken. Neem vandaag nog contact op!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
