import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ramarya for product engineering, AI agents, and custom development projects. Flexible engagement models available.',
  openGraph: {
    title: 'Contact | Ramarya',
    description:
      'Discuss your next product, data platform, or applied AI initiative with Ramarya. Hourly, monthly, and project engagements available.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
