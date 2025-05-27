import HeroCarousel from "./components/HeroSection";
import Others from "./components/Home";
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
      </Head>
      <HeroCarousel />
      <Others />
    </>
  );
}
