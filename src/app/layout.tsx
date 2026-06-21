import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zenix AI — Intelligent Growth Systems for Ecommerce",
  description:
    "Zenix AI builds AI-powered growth systems for modern ecommerce brands. Performance marketing, tracking infrastructure, AI automation, and advanced analytics.",
  keywords: [
    "AI marketing",
    "ecommerce growth",
    "performance marketing",
    "AI automation",
    "tracking infrastructure",
    "Zenix AI",
  ],
  openGraph: {
    title: "Zenix AI — Intelligent Growth Systems for Ecommerce",
    description:
      "We combine AI automation, performance marketing, tracking infrastructure, and advanced reporting to help businesses scale faster.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-bg-primary font-sans text-text-primary">
        {children}
      </body>
    </html>
  );
}
