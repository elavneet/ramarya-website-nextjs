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
    id: 'scoutiq',
    name: 'ScoutIQ',
    description: 'Retail arbitrage mobile application for Amazon sellers to identify profitable books for resale. With 10 million products scanned weekly, ScoutIQ enables users to scan barcodes and instantly see profit margins, featuring an intelligent eScore system that measures sales frequency and smart triggers for automated decision-making.',
    features: [
      'Barcode scanning with instant profit calculations',
      'eScore system measuring sales frequency over 6 months',
      'Smart triggers for automated accept/reject decisions',
      'Downloadable database for offline scanning',
      'Speed Mode for continuous camera-based scanning',
      'Scan Tracker monitoring scans and acceptances by source',
      'Trade-In Value for direct Amazon sales',
      'Profit-based approach focusing on bank deposits',
      'Integration with Amazon Seller Central'
    ],
    techStack: ['React Native', 'Mobile', 'Barcode Scanning', 'Offline Database', 'Amazon API'],
    category: 'E-commerce',
    projectType: ['Mobile', 'API'],
    metrics: '10M products scanned weekly, 400+ full-time sellers, 20K+ community members',
    url: 'https://scoutiq.co',
    image: 'scoutiq.png',
    status: 'active'
  },
  {
    id: 'repriceiq',
    name: 'RepriceIQ',
    description: 'Enterprise-grade dynamic pricing and inventory management platform for Amazon sellers. Part of the Threecolts ecosystem, RepriceIQ optimizes pricing strategies in real-time with advanced analytics and competitive intelligence for maximum profitability.',
    features: [
      'Real-time dynamic pricing algorithms with rule-based automation',
      'Seamless Amazon Seller Central integration',
      'Multi-environment deployment (production & staging)',
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
    id: 'propsnipe',
    name: 'Propsnipe',
    description: 'Real estate intelligence and lead generation platform that scrapes property listings from major real estate websites (Redfin, Zillow, Realtor.com), performs skip tracing to identify property owners, and provides comprehensive tools for real estate investors and agents to find investment opportunities and manage leads efficiently.',
    features: [
      'Multi-source property scraping (Redfin, Zillow, Realtor.com, Craigslist)',
      'Automated skip trace service for property owner identification',
      'Advanced search filters and saved listings',
      'Real-time property feed updates every 12 hours',
      'County records integration with PDF parsing',
      'Analytics dashboard with Chart.js visualizations',
      'CSV export for lead management',
      'Stripe payment integration',
      'Bookmark and alerts system',
      'Multi-state coverage (15+ states)'
    ],
    techStack: ['React 18', 'TypeScript', 'Vite', 'Express.js', 'Python', 'MySQL', 'Puppeteer', 'Chart.js', 'Nginx'],
    category: 'Real Estate',
    projectType: ['Web', 'API', 'Data Pipeline'],
    metrics: 'Processing thousands of property listings daily',
    image: 'propsnipe.png',
    status: 'active'
  },
  {
    id: 'beacons-united',
    name: 'Beacons United',
    description: 'Comprehensive event networking platform using NFC beacon technology for real-time connections. Features mobile and web applications for event management, team challenges, social networking through wearable beacon bracelets, and live leaderboards with payment processing and analytics.',
    features: [
      'NFC beacon tag reading and writing for instant connections',
      'Real-time team challenges and gamification',
      'Live leaderboard updates and team performance tracking',
      'Event creation and comprehensive management tools',
      'Social networking with user profiles and connections',
      'Push notifications and real-time alerts',
      'Location tracking with interactive maps',
      'Stripe payment processing integration',
      'Google Cloud Translate for multi-language support',
      'Admin dashboard with detailed analytics',
      'OTP-based authentication',
      'Habit tracking and GLS challenge management',
      'Dark mode support',
      'Offline storage with AsyncStorage'
    ],
    techStack: ['React 18', 'React Native (Expo 52)', 'TypeScript', 'Express.js', 'MySQL', 'NFC Manager', 'Google Cloud', 'Stripe', 'Bugsnag'],
    category: 'Social & Community',
    projectType: ['Web', 'Mobile', 'API', 'CLI'],
    metrics: 'Supporting thousands of event participants',
    url: 'https://beaconsunited.com/app',
    image: 'beacons-united.png',
    status: 'active'
  },
  {
    id: 'beacon-pulse',
    name: 'Beacon Pulse Hospitality Platform',
    description:
      'Full-stack hospitality engagement suite built for the Allenhurst Beach Club (municipal NJ, USA), combining mobile NFC check-ins, a data-rich web dashboard, REST APIs, and maintenance CLI tooling to orchestrate member and guest experiences.',
    features: [
      'React Native mobile app with NFC wristband scanning and Stripe Terminal integrations',
      'Property-level analytics showing member vs guest activity, hourly traffic, and credit balances',
      'Secure Express.js API with MySQL for tags, check-ins, stripe receipts, and staff tooling',
      'CLI utilities for bulk importing tags, migrating Stripe data, and performing scheduled maintenance',
      'Personalized landing pages that route guests via unique tag URLs and capture engagement logs',
      'Background jobs for real-time notifications, audit logging, and role-based access control',
      'Dashboard visualizations with Chart.js covering attendance cohorts and beacon utilisation',
      'JWT authentication with role separation for property owners, staff, and admin teams'
    ],
    techStack: [
      'React Native (Expo)',
      'React 18',
      'TypeScript',
      'Express.js',
      'MySQL',
      'Chart.js',
      'Stripe Terminal',
      'Node.js CLI',
      'NFC Manager'
    ],
    category: 'Hospitality',
    projectType: ['Mobile', 'Web', 'API', 'CLI'],
    metrics: 'Live with the Allenhurst Beach Club operations team in New Jersey',
    image: 'beacon-pulse.png',
    status: 'active'
  },
  {
    id: 'vbnotes',
    name: 'VBNotes (YouTube Notes Pro)',
    description: 'Comprehensive note-taking platform specifically designed for YouTube videos, combining a Chrome Manifest V3 extension with a responsive web application. Features rich-text editing with Quill, screenshot capabilities with automatic timestamps, real-time synchronization across devices, and optional public sharing.',
    features: [
      'Chrome Manifest V3 extension with content script injection',
      'Rich text editor (Quill) with full formatting support',
      'One-click screenshot capture with automatic video timestamps',
      'Real-time auto-save with 2-second debounce',
      'IndexedDB offline storage for large capacity',
      'Cross-device synchronization via cloud',
      'Privacy controls (public/private notes)',
      'Keyboard shortcuts (Ctrl+Shift+S for screenshots)',
      'HTML to Markdown conversion for export',
      'Personal notes dashboard with search',
      'Video-specific note aggregation',
      'JWT authentication with HTTP-only cookies',
      'Responsive mobile-first design'
    ],
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'MySQL', 'Quill Editor', 'IndexedDB', 'Chrome Extension API'],
    category: 'Content Management',
    projectType: ['Web', 'Browser Extension', 'API'],
    metrics: 'Helping users organize YouTube learning',
    url: 'https://vbnotes.com',
    image: 'vbnotes.png',
    status: 'active'
  },
  {
    id: 'hushread',
    name: 'Hushread',
    description: 'Cross-platform digital reading platform enabling users to access, manage, and enjoy eBooks and articles across iOS, Android, and web devices with seamless real-time synchronization and comprehensive library management.',
    features: [
      'Multi-platform support (iOS, Android, Web)',
      'Digital book library management with collections',
      'Advanced search by title, author, and summary',
      'Article feed aggregation and reader',
      'Rich text article support with formatting',
      'Real-time content synchronization across devices',
      'Compressed book format support with ZIP extraction',
      'User authentication and profile management',
      'Offline reading capabilities',
      'Bookmark and progress tracking'
    ],
    techStack: ['React Native (Expo 53)', 'React 19', 'Vite', 'Express.js', 'TypeScript', 'MySQL', 'JWT', 'JSZip'],
    category: 'Content Management',
    projectType: ['Web', 'Mobile', 'API'],
    metrics: '10,000+ active readers',
    url: 'https://hushread.com',
    image: 'hushread.png',
    status: 'active'
  },
  {
    id: 'sources-of-strength',
    name: 'Sources of Strength',
    description: 'Digital wellness and mental health platform featuring Google Generative AI-powered analytics to provide actionable insights and support for mental health initiatives with comprehensive activity logging and reporting.',
    features: [
      'Google Generative AI integration for mental health insights',
      'Real-time analytics dashboard with Recharts visualizations',
      'Google Docs API integration for documentation',
      'User geolocation tracking with MaxMind',
      'Comprehensive activity and event logging',
      'JWT-based secure authentication',
      'File upload and document management',
      'AI-powered analytics and trend reporting',
      'User engagement metrics and tracking'
    ],
    techStack: ['React 18', 'Vite', 'Tailwind CSS', 'Express.js', 'TypeScript', 'Google Generative AI', 'MySQL', 'Recharts', 'MaxMind'],
    category: 'Healthcare & Wellness',
    projectType: ['Web', 'API'],
    metrics: '50,000+ users supported',
    url: 'https://sourcesofstrength.beaconsunited.com',
    image: 'sources-of-strength.png',
    status: 'active'
  },
  {
    id: 'event-management-nfc',
    name: 'Event Management Using NFC',
    description: 'Event management and gamification platform using NFC beacon bracelets for attendee engagement. Enables organizers to create team-based challenges, track participation through NFC tags, manage live leaderboards, and provide real-time analytics on event performance. Originally designed for the Global Leadership Summit (GLS).',
    features: [
      'NFC beacon bracelet integration for attendance tracking',
      'Team-based challenge creation and management',
      'Multiple challenge types (question, multiple-choice, activation)',
      'Real-time leaderboard with team standings',
      'Admin dashboard with three-tab interface (Management, Performance, Control)',
      'Challenge activation/deactivation controls',
      'Team performance analytics and metrics',
      'Response management and review system',
      'Points override functionality',
      'Engagement rate calculations',
      'URL parameter-based cross-device access',
      'localStorage session management',
      'Team color coding (Blue, Red, Yellow, Green)',
      'Auto-advance to next challenge on completion'
    ],
    techStack: ['React 18', 'TypeScript', 'Vite', 'Express.js', 'MySQL', 'NFC Technology', 'Lucide React'],
    category: 'Events & Conferences',
    projectType: ['Web', 'API'],
    metrics: 'Powering engagement for large-scale events',
    image: 'event-management-nfc.png',
    status: 'active'
  },
  {
    id: 'palletiq',
    name: 'PalletIQ',
    description: 'Comprehensive supply chain and warehouse management platform with advanced inventory tracking, Stripe payment integration, and sophisticated workflow management for pallet and warehouse operations.',
    features: [
      'Advanced data tables with sorting, filtering, and search',
      'Stripe payment processing and transaction management',
      'Print-friendly reporting system with custom layouts',
      'Drag-and-drop workflow management',
      'Type-ahead search functionality for quick access',
      'Audio player integration for instructions',
      'File upload with progress tracking and validation',
      'JWT-based secure authentication',
      'React Tabulator for complex data display',
      'Multi-user role management'
    ],
    techStack: ['React 18', 'Bootstrap', 'Stripe', 'MySQL', 'DataTables', 'React Tabulator', 'Express.js', 'JWT'],
    category: 'Supply Chain',
    projectType: ['Web', 'API'],
    metrics: '$2M+ in transactions processed',
    image: 'palletiq.png',
    status: 'active'
  },
  {
    id: 'bingeq',
    name: 'BingeQ',
    description: 'Entertainment streaming recommendation platform helping users discover and track TV shows and movies with personalized suggestions based on viewing history and preferences.',
    features: [
      'Intelligent TV/Movie recommendation engine',
      'User authentication and personalized profiles',
      'Location-based content suggestions',
      'Push notification system for new releases',
      'Gesture-based mobile navigation',
      'Secure data storage with encryption',
      'Cross-platform synchronization (web & mobile)',
      'Title-based content management and search',
      'Watchlist and favorites functionality'
    ],
    techStack: ['React 18', 'React Native 0.79', 'Expo 53', 'TypeScript', 'Express.js', 'MySQL', 'Expo Notifications'],
    category: 'Entertainment',
    projectType: ['Web', 'Mobile', 'API'],
    metrics: '25,000+ active users',
    url: 'https://bingeq.com',
    image: 'bingeq.png',
    status: 'active'
  },
  {
    id: 'pb35',
    name: 'PB35 Commerce Platform',
    description: 'Full-featured multi-platform commerce solution with OTP authentication, comprehensive order management, and community forum features supporting web, mobile, and admin interfaces.',
    features: [
      'OTP-based secure authentication system',
      'Shopping cart with real-time updates',
      'Multi-user role management (Admin, User, Customer)',
      'Comprehensive product catalog and directory',
      'Order management and tracking system',
      'Customer feedback and review system',
      'Community forum features for engagement',
      'Google Sheets integration for inventory sync',
      'Image processing and optimization with Sharp',
      'PDF generation for invoices and reports',
      'Email notifications via Mailjet',
      'AWS SDK integration for cloud storage'
    ],
    techStack: ['React', 'React Native (Expo)', 'Express.js', 'MySQL', 'AWS SDK', 'Puppeteer', 'Sharp', 'Mailjet', 'Chart.js'],
    category: 'E-commerce',
    projectType: ['Web', 'Mobile', 'API', 'CLI'],
    metrics: '15,000+ registered users',
    url: 'https://booksandbeyond.beaconsunited.com/app',
    image: 'pb35.png',
    status: 'active'
  },
  {
    id: 'winkik',
    name: 'Winkik Social Platform',
    description: 'Mobile-first social networking application with real-time messaging powered by Gifted Chat, Firebase backend, and secure credential storage for seamless social connections.',
    features: [
      'Real-time chat with Gifted Chat library',
      'Multi-screen navigation (tabs, drawer, stack)',
      'Firebase backend integration and real-time database',
      'Secure credential storage with Expo Secure Store',
      'Push notifications for messages and updates',
      'Image picker and media sharing',
      'Draggable grid layout for content organization',
      'Keyboard-aware scrolling for chat',
      'Modal dialogs and date pickers',
      'Redux state management'
    ],
    techStack: ['React Native 0.69', 'Expo 46', 'Firebase', 'Redux', 'React Navigation', 'Gifted Chat', 'Expo Secure Store'],
    category: 'Social & Community',
    projectType: ['Mobile'],
    metrics: '20,000+ registered users',
    image: 'winkik.png',
    status: 'active'
  },
  {
    id: 'flybravo-golf',
    name: 'FlyBravo Golf Data Aggregator',
    description: 'Automated data collection and processing system for golf airmen database using headless browser automation, CSV parsing, and intelligent data pipeline with cron-based scheduling.',
    features: [
      'Automated web scraping with Puppeteer',
      'Headless Chrome browser automation',
      'CSV data parsing and transformation',
      'ZIP archive extraction and processing',
      'Cookie-based authentication handling',
      'XSS protection bypass for secure pages',
      'MySQL data persistence and querying',
      'Cron-based scheduling for regular updates',
      'Error handling and logging',
      'Data validation and cleaning'
    ],
    techStack: ['Node.js', 'TypeScript', 'Puppeteer', 'MySQL', 'CSV Parser', 'ADM-Zip', 'Axios', 'Cron'],
    category: 'Data Processing',
    projectType: ['CLI', 'Data Pipeline'],
    image: 'flybravo-golf.png',
    status: 'active'
  }
];

export const categories = [
  'All',
  'E-commerce',
  'Real Estate',
  'Content Management',
  'Healthcare & Wellness',
  'Social & Community',
  'Events & Conferences',
  'Supply Chain',
  'Entertainment',
  'Data Processing',
  'Hospitality'
];
