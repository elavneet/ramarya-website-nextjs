import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ramarya.com"),
  title: "Ramarya - Product Engineering & Applied AI",
  description:
    "Ramarya builds modern web and mobile products, AI agents, and retrieval-augmented systems for $100M+ organisations.",
  keywords: [
    "Ramarya Consultancy",
    "product engineering studio",
    "applied AI consultancy",
    "retrieval augmented generation",
    "custom AI agents",
    "Model Context Protocol",
    "Next.js development",
    "React Native product team",
  ],
  authors: [{ name: "Ramarya Consultancy" }],
  alternates: {
    canonical: "https://ramarya.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ramarya.com",
    siteName: "Ramarya Consultancy",
    title: "Ramarya Consultancy - Product Engineering & Applied AI",
    description:
      "Modern platforms, MCP-powered AI agents, and retrieval-augmented knowledge systems delivered by Ramarya Consultancy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramarya Consultancy - Product Engineering & Applied AI",
    description:
      "Youthful execution with 20+ years of leadership to launch resilient products, RAG systems, and custom AI agents.",
  },
  icons: {
    icon: [
      {
        url: "https://ramarya.com/wp-content/uploads/2023/04/cropped-ramarya-icon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://ramarya.com/wp-content/uploads/2023/04/cropped-ramarya-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://ramarya.com/wp-content/uploads/2023/04/cropped-ramarya-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
