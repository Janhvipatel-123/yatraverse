import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | YatraVerse",
    default: "YatraVerse | Luxury Travel & Spiritual Journeys in India",
  },
  description: "Experience the soul of India with YatraVerse. Discover premium luxury travel, curated heritage walks, and bespoke spiritual journeys.",
  keywords: ["Luxury Travel India", "Spiritual Journeys", "Heritage Walks", "YatraVerse", "Custom Itineraries", "Premium Travel"],
  openGraph: {
    title: "YatraVerse | Luxury Travel & Spiritual Journeys in India",
    description: "Experience the soul of India with YatraVerse. Discover premium luxury travel, curated heritage walks, and bespoke spiritual journeys.",
    url: "https://yatraverse.com",
    siteName: "YatraVerse",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "YatraVerse Luxury Travel India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YatraVerse | Luxury Travel & Spiritual Journeys",
    description: "Experience the soul of India with YatraVerse.",
    images: ["https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-neutral-50 selection:bg-amber-500/30">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
