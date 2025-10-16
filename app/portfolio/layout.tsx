import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore web platforms, revenue tools, and AI-enabled products Ramarya has delivered for teams across commerce, edtech, and operations.',
  openGraph: {
    title: 'Portfolio | Ramarya',
    description:
      'Case studies of web applications, React Native apps, and AI systems built by Ramarya for $100M+ revenue companies.',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
