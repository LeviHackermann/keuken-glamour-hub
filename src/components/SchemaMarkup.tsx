
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaMarkup: React.FC = () => {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeGoodsStore',
    'name': 'Keukenhelden',
    'description': 'Uw exclusieve keukenspecialist voor hoogwaardige keukens in België',
    'url': 'https://www.keukenhelden.nl',
    'telephone': '+31612345678',
    'email': 'info@keukenhelden.nl',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Keukenlaan 123',
      'addressLocality': 'Amsterdam',
      'postalCode': '1234 AB',
      'addressCountry': 'NL'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '52.3676',
      'longitude': '4.9041'
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
    'url': 'https://www.keukenhelden.nl',
    'logo': 'https://www.keukenhelden.nl/logo.png',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+31612345678',
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
