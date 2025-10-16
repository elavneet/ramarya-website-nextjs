export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  benefits: string[];
  stats?: {
    label: string;
    value: string;
  }[];
  pricing?: string;
  cta: {
    primary: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: string;
  videoDemo?: string;
  screenshots?: string[];
  targetAudience: string[];
  rating?: number;
}

export const products: Product[] = [
  {
    id: 'vbnotes',
    name: 'VBNotes',
    tagline: 'Take smarter video notes without pausing your flow',
    description: 'VBNotes seamlessly integrates with YouTube to help you capture ideas, timestamps, and screenshots in one connected workspace. Whether you\'re a student, content creator, or researcher, VBNotes transforms how you learn from video content by keeping your notes synchronized and organized.',
    features: [
      'Flow-friendly auto pause/resume during typing',
      'Instant screenshot capture with automatic timestamps',
      'Rich text formatting with Quill editor (bold, italics, headings, lists)',
      'Cloud sync across all your devices in real-time',
      'Notion integration with auto-sync and Markdown export',
      'Powerful search across all notes, titles, and videos',
      'Public sharing with shareable links for collaboration',
      'Privacy controls to toggle between private and public',
      'Chrome Manifest V3 extension for seamless integration',
      'IndexedDB for offline access and large storage capacity'
    ],
    benefits: [
      'Never lose your place in a video while taking notes',
      'Capture visual moments with automatic timestamped screenshots',
      'Access your notes anywhere with cloud synchronization',
      'Collaborate with teams through public note sharing',
      'Export to Notion or Markdown for your existing workflow',
      'Find any note instantly with powerful search'
    ],
    stats: [
      { label: 'Active Creators', value: '2,000+' },
      { label: 'Videos Annotated', value: '20,000+' },
      { label: 'User Rating', value: '4.9★' }
    ],
    pricing: 'Free during early access',
    cta: {
      primary: {
        text: 'Install Chrome Extension',
        url: 'https://vbnotes.com'
      },
      secondary: {
        text: 'Try Web App',
        url: 'https://vbnotes.com'
      }
    },
    image: 'vbnotes-promo-11.gif',
    targetAudience: [
      'Students learning from online courses',
      'Content creators researching competitors',
      'Researchers analyzing video content',
      'Professionals taking webinar notes',
      'Anyone who learns from YouTube videos'
    ],
    rating: 4.9
  }
];
