import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResumeSection from "@/components/ResumeSection";

export const metadata = {
  title: "Resume | Om Gadhave",
  description: "Download the formal resume of Om Gadhave.",
};

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col bg-white">
        <ResumeSection />
      </main>
      <Footer />
    </>
  );
}
