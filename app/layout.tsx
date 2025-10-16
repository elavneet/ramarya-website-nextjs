import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ramarya.com"),
  title: {
    default: "Ramarya - Product Engineering & Applied AI",
    template: "Ramarya - %s",
  },
  description:
    "Ramarya Consultancy builds modern web and mobile products, retrieval-augmented intelligence, and custom Model Context Protocol (MCP) agents that help $100M+ organisations act on their data in real time.",
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
      "We combine youthful execution with 20+ years of leadership to launch resilient digital products, RAG systems, and custom AI agents.",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
