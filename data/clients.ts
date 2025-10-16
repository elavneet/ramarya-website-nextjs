export interface Client {
  name: string;
  logo: string;
  website: string;
  description: string;
}

export const clients: Client[] = [
  {
    name: 'Beacons United',
    logo: '/assets/clients/beaconsunited.com.png',
    website: 'https://beaconsunited.com',
    description: 'Sports technology and athlete management platform',
  },
  {
    name: 'Hocrox',
    logo: '/assets/clients/hocrox.com.png',
    website: 'https://hocrox.com',
    description: 'Digital solutions and technology services',
  },
  {
    name: 'Hushread',
    logo: '/assets/clients/hushread.com.png',
    website: 'https://hushread.com',
    description: 'Privacy-focused reading and content platform',
  },
  {
    name: 'PB35',
    logo: '/assets/clients/pb35.com.png',
    website: 'https://pb35.com',
    description: 'Business solutions and consulting services',
  },
  {
    name: 'Promo.ly',
    logo: '/assets/clients/promo.ly_.png',
    website: 'https://promo.ly',
    description: 'Marketing and promotional platform',
  },
  {
    name: 'ScoutIQ',
    logo: '/assets/clients/scoutiq.png',
    website: 'https://scoutiq.co',
    description: 'Book scouting and inventory management for resellers',
  },
  {
    name: 'ThreeColts',
    logo: '/assets/clients/threecolts.png',
    website: 'https://threecolts.com',
    description: 'E-commerce software and analytics platform',
  },
];
