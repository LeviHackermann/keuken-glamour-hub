
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaMarkup: React.FC = () => {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeGoodsStore',
    'name': 'Keukenhelden',
    'description': 'Uw exclusieve keukenspecialist voor hoogwaardige keukens in België',
    'url': 'https://www.dekeukenhelden.be',
    'telephone': '+32 478 44 73 05',
    'email': 'info@dekeukenhelden.be',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Vlaams-Brabant',
      'addressLocality': 'Vlaams-Brabant',
      'addressCountry': 'BE'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '50.8798',
      'longitude': '4.7005'
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '09:00',
        'closes': '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Saturday',
        'opens': '10:00',
        'closes': '17:00'
      }
    ],
    'sameAs': [
      'https://www.facebook.com/keukenhelden',
      'https://www.instagram.com/keukenhelden'
    ]
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Keukenhelden',
    'url': 'https://www.dekeukenhelden.be',
    'logo': 'https://www.dekeukenhelden.be/logo.png',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+32 478 44 73 05',
      'contactType': 'customer service'
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
