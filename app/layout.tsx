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
  title: {
    default: "Hospital Uniso | First Private University Hospital in Somalia",
    template: "%s | Hospital Uniso"
  },
  description:
    "Hospital Uniso is the first private university hospital in Somalia, dedicated to providing high-quality healthcare and medical education. 24/7 emergency services, specialized departments, and world-class medical care.",
  keywords: [
    "hospital",
    "Somalia",
    "Mogadishu",
    "medical care",
    "healthcare",
    "university hospital",
    "emergency services",
    "internal medicine",
    "surgery",
    "pediatrics",
    "cardiology",
    "oncology",
    "maternity",
    "pharmacy",
    "laboratory",
    "diagnostics"
  ],
  authors: [{ name: "Hospital Uniso" }],
  creator: "Hospital Uniso",
  publisher: "Hospital Uniso",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hospital.so'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hospital.so',
    title: 'Hospital Uniso | First Private University Hospital in Somalia',
    description: 'Hospital Uniso is the first private university hospital in Somalia, dedicated to providing high-quality healthcare and medical education. 24/7 emergency services and specialized departments.',
    siteName: 'Hospital Uniso',
    images: [
      {
        url: '/uniso-logo.png',
        width: 567,
        height: 567,
        alt: 'Hospital Uniso Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospital Uniso | First Private University Hospital in Somalia',
    description: 'Hospital Uniso is the first private university hospital in Somalia, dedicated to providing high-quality healthcare and medical education.',
    images: ['/uniso-logo.png'],
    creator: '@hospitaluniso',
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
  verification: {
    google: 'FSMZUkSKI-mmE83mx1lLkwi_OCJZ0FmAWMrOkH9mePs',
  },
  category: 'healthcare',
  classification: 'Medical Services',
  icons: {
    icon: [
      { url: '/uniso-logo.png', type: 'image/png' },
    ],
    apple: '/uniso-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#16204F" />
      <meta name="msapplication-TileColor" content="#16204F" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="en" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="SO" />
      <meta name="geo.placename" content="Mogadishu, Somalia" />
      
      {/* Contact Information */}
      <meta name="contact" content="info@hospital.so" />
      <meta name="phone" content="+252 61 8332419" />
      <meta name="address" content="Howlwadaag Road, Mogadishu Banaadir, Somalia" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Howlwadaag Road" />
      <meta name="business:contact_data:locality" content="Mogadishu" />
      <meta name="business:contact_data:region" content="Banaadir" />
      <meta name="business:contact_data:country_name" content="Somalia" />
      <meta name="business:contact_data:email" content="info@hospital.so" />
      <meta name="business:contact_data:phone_number" content="+252 61 8332419" />
      
      {/* Operating Hours */}
      <meta name="business:hours:day" content="monday,tuesday,wednesday,thursday,friday,saturday,sunday" />
      <meta name="business:hours:start" content="00:00" />
      <meta name="business:hours:end" content="23:59" />
      
      {/* Favicon Links */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/uniso-logo.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/uniso-logo.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/uniso-logo.png" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

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
