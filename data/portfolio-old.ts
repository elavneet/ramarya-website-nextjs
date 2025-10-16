export interface Project {
  id: string;
  name: string;
  description: string;
  features: string[];
  techStack: string[];
  category: string;
  projectType: string[]; // e.g., ['Web', 'Mobile', 'API']
  metrics?: string;
  url?: string;
  image: string;
  status: 'active' | 'archived';
}

export const projects: Project[] = [
  {
    id: 'repriceiq',
    name: 'RepriceIQ',
    description: 'Enterprise-grade dynamic pricing and inventory management platform for Amazon sellers. Part of the Threecolts ecosystem, RepriceIQ helps optimize pricing strategies in real-time for maximum profitability with advanced analytics and competitive intelligence.',
    features: [
      'Real-time dynamic pricing algorithms with rule-based automation',
      'Seamless Amazon Seller Central integration',
      'Multi-environment deployment architecture (production & staging)',
      'Advanced analytics dashboard with custom date range filtering',
      'Comprehensive inventory management and tracking',
      'Automated repricing rules engine with smart triggers',
      'Competitor price monitoring and market intelligence',
      'Data visualization and reporting tools'
    ],
    techStack: ['React 18', 'Vite', 'TypeScript', 'Bootstrap', 'MySQL', 'Express.js', 'Google reCAPTCHA'],
    category: 'E-commerce',
    projectType: ['Web', 'API'],
    metrics: 'Serving 1000+ Amazon sellers',
    url: 'https://repriceiq.threecolts.com',
    image: 'repriceiq.png',
    status: 'active'
  },
  {
    id: 'hushread',
    name: 'Hushread',
    description: 'Cross-platform digital reading platform enabling users to access, manage, and enjoy eBooks and articles across mobile and web devices with seamless synchronization.',
    features: [
      'Multi-platform support (iOS, Android, Web)',
      'Digital book library management',
      'Advanced search by title, author, and summary',
      'Article feed aggregation',
      'Rich text article support',
      'Real-time content synchronization',
      'Compressed book format support with ZIP extraction',
      'User authentication and profiles'
    ],
    techStack: ['React Native (Expo 53)', 'React 19', 'Vite', 'Express.js', 'TypeScript', 'MySQL', 'JWT', 'JSZip'],
    category: 'Content Management',
    metrics: '10,000+ active readers',
    url: 'https://hushread.com',
    image: 'hushread.png',
    status: 'active'
  },
  {
    id: 'sources-of-strength',
    name: 'Sources of Strength',
    description: 'Digital wellness and mental health platform featuring AI-powered analytics to provide insights and support for mental health initiatives.',
    features: [
      'Google Generative AI integration for insights',
      'Real-time analytics dashboard with Recharts',
      'Google Docs API integration',
      'User geolocation tracking with MaxMind',
      'Comprehensive activity logging',
      'JWT-based authentication',
      'File upload and management',
      'AI-powered analytics and reporting'
    ],
    techStack: ['React 18', 'Vite', 'Tailwind CSS', 'Express.js', 'TypeScript', 'Google Generative AI', 'MySQL', 'Recharts'],
    category: 'Healthcare & Wellness',
    metrics: '50,000+ users supported',
    image: 'sources-of-strength.png',
    status: 'active'
  },
  {
    id: 'mudlove',
    name: 'MudLove Community Platform',
    description: 'Multi-platform community engagement solution with web, mobile, and CLI components for seamless user interaction and real-time notifications.',
    features: [
      'Cross-platform user experience (Web & Mobile)',
      'Real-time push notifications via CLI',
      'User authentication and authorization',
      'Community engagement features',
      'Timezone-aware operations',
      'UUID-based identity management',
      'Responsive design across all platforms'
    ],
    techStack: ['React', 'React Native (Expo)', 'Express.js', 'TypeScript', 'MySQL', 'Node.js CLI', 'Moment Timezone'],
    category: 'Social & Community',
    url: 'https://beaconsunited.com/app',
    image: 'mudlove.png',
    status: 'active'
  },
  {
    id: 'kingsloot',
    name: 'KingsLoot Marketplace',
    description: 'Inventory and purchase order management platform with GraphQL API support, designed for efficient marketplace operations.',
    features: [
      'GraphQL API architecture',
      'Purchase order management system',
      'Real-time inventory tracking',
      'Advanced analytics with Recharts',
      'Modern UI with Tailwind CSS and shadcn/ui',
      'Responsive design with Headless UI components',
      'Optimized GraphQL queries',
      'Multi-user role management'
    ],
    techStack: ['React 18', 'GraphQL', 'Express.js', 'Tailwind CSS', 'MySQL', 'shadcn/ui', 'Recharts', 'Heroicons'],
    category: 'E-commerce',
    metrics: '5,000+ daily transactions',
    image: 'kingsloot.png',
    status: 'active'
  },
  {
    id: 'palletiq',
    name: 'PalletIQ',
    description: 'Comprehensive supply chain and warehouse management platform with advanced inventory tracking and Stripe payment integration.',
    features: [
      'Advanced data tables with sorting and filtering',
      'Stripe payment processing',
      'Print-friendly reporting system',
      'Drag-and-drop workflow management',
      'Type-ahead search functionality',
      'Audio player integration',
      'File upload with progress tracking',
      'JWT-based authentication'
    ],
    techStack: ['React 18', 'Bootstrap', 'Stripe', 'MySQL', 'DataTables', 'React Tabulator', 'Express.js'],
    category: 'Supply Chain',
    metrics: '$2M+ in transactions processed',
    image: 'palletiq.png',
    status: 'active'
  },
  {
    id: 'bingeq',
    name: 'BingeQ',
    description: 'Entertainment streaming recommendation platform helping users discover and track TV shows and movies with personalized suggestions.',
    features: [
      'TV/Movie recommendation engine',
      'User authentication and profiles',
      'Location-based content suggestions',
      'Push notification system',
      'Gesture-based mobile navigation',
      'Secure data storage',
      'Cross-platform synchronization',
      'Title-based content management'
    ],
    techStack: ['React 18', 'React Native 0.79', 'Expo 53', 'TypeScript', 'Express.js', 'MySQL', 'Expo Notifications'],
    category: 'Entertainment',
    metrics: '25,000+ active users',
    image: 'bingeq.png',
    status: 'active'
  },
  {
    id: 'pb35',
    name: 'PB35 Commerce Platform',
    description: 'Full-featured commerce platform with OTP authentication, multi-user support, and comprehensive order management capabilities.',
    features: [
      'OTP-based authentication system',
      'Shopping cart functionality',
      'Multi-user role management (Admin, User, Customer)',
      'Product catalog and directory',
      'Order management system',
      'Customer feedback system',
      'Community forum features',
      'Google Sheets integration',
      'Image processing and PDF generation',
      'Email notifications via Mailjet'
    ],
    techStack: ['React', 'React Native (Expo)', 'Express.js', 'MySQL', 'AWS SDK', 'Puppeteer', 'Sharp', 'Mailjet'],
    category: 'E-commerce',
    metrics: '15,000+ registered users',
    image: 'pb35.png',
    status: 'active'
  },
  {
    id: 'baseball-daily-motivation',
    name: 'Baseball Daily Motivation',
    description: 'Sports engagement platform delivering daily motivational content and quotes for baseball enthusiasts with advanced image processing.',
    features: [
      'Daily motivational quote delivery',
      'Advanced image optimization with Sharp',
      'HEIC image format conversion',
      'Google API integration for content management',
      'Content tagging system',
      'Google Drive integration',
      'Real-time content updates',
      'Multi-format image handling'
    ],
    techStack: ['React 18', 'Vite', 'Express.js', 'TypeScript', 'MySQL', 'Sharp', 'Google APIs', 'HEIC Converter'],
    category: 'Sports & Fitness',
    metrics: '8,000+ daily active users',
    image: 'baseball-motivation.png',
    status: 'active'
  },
  {
    id: 'flybravo-golf',
    name: 'FlyBravo Golf Data Aggregator',
    description: 'Automated data collection and processing system for golf airmen database using headless browser automation and CSV parsing.',
    features: [
      'Automated web scraping with Puppeteer',
      'Headless Chrome automation',
      'CSV data parsing and transformation',
      'ZIP archive extraction and processing',
      'Cookie-based authentication handling',
      'XSS protection bypass for secure pages',
      'MySQL data persistence',
      'Cron-based scheduling'
    ],
    techStack: ['Node.js', 'TypeScript', 'Puppeteer', 'MySQL', 'CSV Parser', 'ADM-Zip', 'Axios'],
    category: 'Data Processing',
    image: 'flybravo-golf.png',
    status: 'active'
  },
  {
    id: 'epubjs-reader',
    name: 'ePub.js Reader',
    description: 'Open-source JavaScript-based ePUB reader for rendering and displaying eBooks in web browsers with offline reading capabilities.',
    features: [
      'ePUB format rendering',
      'Fullscreen reading mode',
      'Bookmark management with local storage',
      'ZIP archive support',
      'Offline reading capability',
      'Custom ePUB file loading via URL',
      'Responsive design',
      'Live development server'
    ],
    techStack: ['JavaScript', 'epub.js', 'jQuery', 'Grunt', 'localForage', 'JSZip', 'Screenfull'],
    category: 'Content Management',
    url: 'http://futurepress.github.com/epubjs-reader/',
    image: 'epubjs-reader.png',
    status: 'active'
  },
  {
    id: 'scoutiq',
    name: 'ScoutIQ Analytics Platform',
    description: 'Comprehensive sports analytics and scouting platform for tracking player performance metrics with microservices architecture.',
    features: [
      'Player performance analytics',
      'Historical data management',
      'Mobile application',
      'Live search functionality',
      'Microservices architecture',
      'Email integration with Mailgun',
      'Advanced query building with Knex.js',
      'Multi-component monorepo structure'
    ],
    techStack: ['React', 'Lerna', 'MySQL', 'Knex.js', 'Express.js', 'Mailgun', 'Jest', 'Vitest'],
    category: 'Sports & Analytics',
    metrics: '100,000+ player profiles tracked',
    image: 'scoutiq.png',
    status: 'archived'
  },
  {
    id: 'winkik',
    name: 'Winkik Social Platform',
    description: 'Mobile-first social networking application with real-time messaging, Firebase backend, and secure credential storage.',
    features: [
      'Real-time chat with Gifted Chat',
      'Multi-screen navigation (tabs, drawer, stack)',
      'Firebase backend integration',
      'Secure credential storage with Expo Secure Store',
      'Push notifications',
      'Image picker and media handling',
      'Draggable grid layout',
      'Keyboard-aware scrolling',
      'Modal dialogs and date pickers'
    ],
    techStack: ['React Native 0.69', 'Expo 46', 'Firebase', 'Redux', 'React Navigation', 'Gifted Chat'],
    category: 'Social & Community',
    metrics: '20,000+ registered users',
    image: 'winkik.png',
    status: 'archived'
  }
];

export const categories = [
  'All',
  'E-commerce',
  'Content Management',
  'Healthcare & Wellness',
  'Social & Community',
  'Supply Chain',
  'Entertainment',
  'Sports & Fitness',
  'Sports & Analytics',
  'Data Processing'
];
