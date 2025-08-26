import HeroCarousel from "./components/HeroSection";
import Others from "./components/Home";
import AwarenessSection from "./components/AwarenessSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Hospital Uniso | First Private University Hospital in Somalia
        </title>
        <meta
          name="description"
          content="Hospital Uniso is the first private university hospital in Somalia, dedicated to providing high-quality healthcare and medical education."
        />
          <meta property="og:image" content="https://www.hospitaluniso.so/uniso-logo.png" />

      </Head>
      <HeroCarousel />
      <AwarenessSection />
      <Others />

      {/* WhatsApp Floating Button */}
    </>
  );
}
