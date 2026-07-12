import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImageGrid from "@/components/ImageGrid";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/AboutSection";
import ProofSection from "@/components/ProofSection";
import RecognitionSection from "@/components/RecognitionSection";
import WorksSection from "@/components/WorksSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-8">
        <HeroSection />
        <ImageGrid />
        <Marquee />
        <AboutSection />
        <ProofSection />
        <RecognitionSection />
        <WorksSection />
      </main>
      <Footer />
    </>
  );
}
