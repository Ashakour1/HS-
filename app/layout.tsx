import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StaticSideIcons from "./components/StaticSideIcons";
import MobileNav from "@/components/ui/mobile-nav";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <link rel="icon" type="image/svg+xml" href="/uniso-logo.png" />

      <body
        className={`${poppins.variable} antialiased pb-16 md:pb-0`}
      >
        <Header />

        {children}
        
        <Footer />
        <Link
        href="https://wa.me/252618332419"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#00A651] hover:bg-[#0E74FC] transition-all duration-300 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl z-50 hover:scale-110 animate-pulse hover:animate-none group"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8 group-hover:animate-bounce transition-transform duration-300" />
        
        {/* Pulsing ring animation */}
        <div className="absolute inset-0 rounded-full border-2 border-[#00A651] animate-ping opacity-75"></div>
        
        {/* Second pulsing ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#00A651] animate-ping animation-delay-1000 opacity-50"></div>
      </Link>
      </body>
    </html>
  );
}
