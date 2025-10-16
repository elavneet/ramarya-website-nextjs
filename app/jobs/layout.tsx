import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Ramarya to ship platforms like ScoutIQ and VBNotes while prototyping AI agents, RAG stacks, and automation for $100M+ client operations.',
  openGraph: {
    title: 'Careers | Ramarya',
    description:
      'Work on cutting-edge product engineering and applied AI projects with a youthful, high-energy crew guided by 20+ years of experience.',
  },
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
