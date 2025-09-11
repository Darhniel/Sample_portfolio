import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import ScreenGuard from "@/components/screenGuard";

// Initialize the Inter font with desired subsets
const inter = Inter({
  subsets: ['latin'],
 weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter', // Optional variable name
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OLOJO DANIEL",
  description: "PRODUCT DESIGNER & PITCH DECK DESIGNER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <ScreenGuard minWidth={500}>{children}</ScreenGuard>
      </body>
    </html>
  );
}
