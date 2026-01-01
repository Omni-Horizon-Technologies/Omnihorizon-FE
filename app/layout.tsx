import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Omnihorizon",
    default: "Omnihorizon - AI Solutions for Modern Businesses",
  },
  description:
    "Transform your business with cutting-edge AI solutions. Omnihorizon provides intelligent automation, AI-powered tools, and innovative technology including LegitWriter, ReelUp, and VetMemos.",
  keywords: [
    "omnihorizon",
    "AI solutions",
    "artificial intelligence",
    "machine learning",
    "legitwriter",
    "reelup",
    "vetmemos",
    "AI automation",
    "business AI",
  ],
  authors: [{ name: "Omnihorizon Team" }],
  creator: "Omnihorizon",
  publisher: "Omnihorizon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://omnihorizon.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://omnihorizon.com",
    title: "Omnihorizon - AI Solutions for Modern Businesses",
    description:
      "Transform your business with cutting-edge AI solutions. Intelligent automation and AI-powered tools for modern businesses.",
    siteName: "Omnihorizon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omnihorizon - AI Solutions for Modern Businesses",
    description:
      "Transform your business with cutting-edge AI solutions. Intelligent automation and AI-powered tools for modern businesses.",
    creator: "@omnihorizon",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/Omnihorizon tech-2.png",
    shortcut: "/Omnihorizon tech-2.png",
    apple: "/Omnihorizon tech-2.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${playfair.variable} min-h-screen bg-white flex flex-col`}
      >
        <Header />
        <main className="w-full flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

