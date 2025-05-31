import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StaticSideIcons from "./components/StaticSideIcons";
import MobileNav from "@/components/ui/mobile-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Hospital Uniso | First Private University Hospital in Somalia",
  description:
    "Hospital Uniso is the first private university hospital in Somalia, dedicated to providing high-quality healthcare and medical education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <meta
        name="google-site-verification"
        content="FSMZUkSKI-mmE83mx1lLkwi_OCJZ0FmAWMrOkH9mePs"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pb-16 md:pb-0`}
      >
        <Header />
        <StaticSideIcons />
        {children}
        <MobileNav />
        <Footer />
      </body>
    </html>
  );
}
