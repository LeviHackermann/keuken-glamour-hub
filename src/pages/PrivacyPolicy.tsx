
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacyverklaring - Keukenhelden</title>
        <meta name="description" content="Privacyverklaring van Keukenhelden conform de Algemene Verordening Gegevensbescherming (AVG/GDPR)." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.dekeukenhelden.be/privacy-policy" />
      </Helmet>

      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-black" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Privacyverklaring</h1>
            <p className="text-xl text-gray-600">
              Laatst bijgewerkt: 17 juni 2025
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Inleiding
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Keukenhelden respecteert uw privacy en hecht grote waarde aan de bescherming van uw persoonlijke gegevens. 
                Deze privacyverklaring legt uit hoe wij uw persoonlijke gegevens verzamelen, gebruiken, bewaren en beschermen 
                in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG/GDPR) en andere toepasselijke 
                privacywetgeving.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>1. Verwerkingsverantwoordelijke</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Keukenhelden</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Vlaams-Brabant, Belgium</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href="mailto:info@dekeukenhelden.be" className="text-blue-600 hover:underline">
                      info@dekeukenhelden.be
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <a href="tel:+32478447305" className="text-blue-600 hover:underline">
                      +32 478 44 73 05
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>2. Welke gegevens verzamelen wij?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Contactgegevens</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Naam en voornaam</li>
                    <li>E-mailadres</li>
                    <li>Telefoonnummer</li>
                    <li>Bericht/vraag</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technische gegevens</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>IP-adres</li>
                    <li>Browsertype en -versie</li>
                    <li>Bezochte pagina's en tijdstip van bezoek</li>
                    <li>Referral URL (waar u vandaan komt)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>3. Doeleinden van gegevensverwerking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Wij verwerken uw gegevens voor:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Het beantwoorden van uw vragen en verzoeken</li>
                    <li>Het versturen van informatie over onze producten en diensten</li>
                    <li>Het verbeteren van onze website en dienstverlening</li>
                    <li>Het voldoen aan wettelijke verplichtingen</li>
                    <li>Marketing (alleen met uw expliciete toestemming)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>4. Rechtsgronden voor verwerking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Toestemming:</strong> Voor marketing en nieuwsbrieven</li>
                  <li><strong>Gerechtvaardigd belang:</strong> Voor het beantwoorden van vragen en verbeteren van onze diensten</li>
                  <li><strong>Contractuele verplichting:</strong> Voor het uitvoeren van overeenkomsten</li>
                  <li><strong>Wettelijke verplichting:</strong> Voor administratieve en fiscale doeleinden</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>5. Bewaartermijn</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <p>Wij bewaren uw gegevens niet langer dan noodzakelijk:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Contactformulier gegevens: 2 jaar na laatste contact</li>
                  <li>Marketing toestemmingen: tot intrekking van toestemming</li>
                  <li>Wettelijk verplichte gegevens: conform wettelijke bewaartermijnen</li>
                  <li>Website analytics: 26 maanden</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>6. Uw rechten</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 mb-4">U heeft de volgende rechten betreffende uw persoonlijke gegevens:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Recht van inzage:</strong> U kunt opvragen welke gegevens wij van u hebben</li>
                  <li><strong>Recht van rectificatie:</strong> U kunt onjuiste gegevens laten corrigeren</li>
                  <li><strong>Recht van verwijdering:</strong> U kunt verzoeken uw gegevens te verwijderen</li>
                  <li><strong>Recht van beperking:</strong> U kunt de verwerking laten beperken</li>
                  <li><strong>Recht van overdraagbaarheid:</strong> U kunt uw gegevens in een gestructureerd formaat opvragen</li>
                  <li><strong>Recht van bezwaar:</strong> U kunt bezwaar maken tegen de verwerking</li>
                  <li><strong>Recht om toestemming in te trekken:</strong> Voor verwerkingen gebaseerd op toestemming</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Om deze rechten uit te oefenen, neemt u contact met ons op via{' '}
                  <a href="mailto:info@dekeukenhelden.be" className="text-blue-600 hover:underline">
                    info@dekeukenhelden.be
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>7. Beveiliging</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Wij nemen passende technische en organisatorische maatregelen om uw persoonlijke gegevens te beschermen 
                tegen ongeautoriseerde toegang, verlies, vernietiging of wijziging. Dit omvat onder andere het gebruik van 
                SSL-encryptie, toegangscontroles en regelmatige beveiligingsupdates.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>8. Delen met derden</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <p>Wij delen uw gegevens alleen met derden wanneer dit noodzakelijk is:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Voor het leveren van onze diensten (bijv. hosting providers)</li>
                  <li>Wanneer wij wettelijk verplicht zijn</li>
                  <li>Met uw expliciete toestemming</li>
                </ul>
                <p className="mt-4">
                  Alle externe partijen zijn contractueel verplicht om uw gegevens te beschermen conform de AVG/GDPR.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>9. Cookies en tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <p>Onze website kan gebruik maken van cookies voor:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Functionele cookies (noodzakelijk voor de werking van de website)</li>
                  <li>Analytische cookies (voor websitestatistieken)</li>
                  <li>Marketing cookies (alleen met uw toestemming)</li>
                </ul>
                <p className="mt-4">
                  U kunt uw cookie-instellingen beheren via uw browserinstellingen.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>10. Wijzigingen in deze privacyverklaring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Wij kunnen deze privacyverklaring van tijd tot tijd bijwerken. De meest recente versie is altijd beschikbaar 
                op onze website. Bij belangrijke wijzigingen zullen wij u hiervan op de hoogte stellen.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>11. Klachten</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <p>
                  Heeft u klachten over de manier waarop wij uw persoonlijke gegevens verwerken? 
                  Neem dan eerst contact met ons op via{' '}
                  <a href="mailto:info@dekeukenhelden.be" className="text-blue-600 hover:underline">
                    info@dekeukenhelden.be
                  </a>
                </p>
                <p>
                  U heeft ook het recht om een klacht in te dienen bij de Belgische Gegevensbeschermingsautoriteit:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Gegevensbeschermingsautoriteit</strong></p>
                  <p>Drukpersstraat 35, 1000 Brussel</p>
                  <p>Tel: +32 (0)2 274 48 00</p>
                  <p>E-mail: contact@apd-gba.be</p>
                  <p>Website: www.gegevensbeschermingsautoriteit.be</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Voor vragen over deze privacyverklaring of uw persoonlijke gegevens kunt u contact met ons opnemen:
              </p>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:info@dekeukenhelden.be" className="text-blue-600 hover:underline">
                    info@dekeukenhelden.be
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+32478447305" className="text-blue-600 hover:underline">
                    +32 478 44 73 05
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Vlaams-Brabant, Belgium</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
