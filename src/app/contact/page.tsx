import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact | Om Gadhave",
  description: "Get in touch with Om Gadhave, a developer making wonders with code.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col bg-white">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
