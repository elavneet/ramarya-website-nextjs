export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ramarya Consultancy',
    url: 'https://ramarya.com',
    logo: 'https://ramarya.com/assets/logo.png',
    description:
      'Ramarya builds modern web and mobile products, AI agents, and retrieval-augmented systems for $100M+ organisations.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@ramarya.com',
      contactType: 'Customer Service',
    },
    sameAs: [
      'https://github.com/ramarya',
      'https://linkedin.com/company/ramarya',
    ],
    foundingDate: '2020',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '10-50',
    },
    knowsAbout: [
      'Product Engineering',
      'Applied AI',
      'Retrieval Augmented Generation',
      'Model Context Protocol',
      'Next.js Development',
      'React Native',
      'AI Agents',
      'Custom Software Development',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ramarya Consultancy',
    url: 'https://ramarya.com',
    description:
      'Product engineering and applied AI consultancy specializing in web platforms, mobile apps, and intelligent systems.',
    publisher: {
      '@type': 'Organization',
      name: 'Ramarya Consultancy',
    },
  };

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Ramarya Consultancy',
    image: 'https://ramarya.com/assets/logo.png',
    url: 'https://ramarya.com',
    telephone: '',
    email: 'contact@ramarya.com',
    priceRange: '$75-$150',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Product Engineering',
      'Applied AI Development',
      'Custom AI Agents',
      'RAG Systems',
      'Web Development',
      'Mobile Development',
      'MCP Integration',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  );
}
