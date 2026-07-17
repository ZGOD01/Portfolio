import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WorkPage from "@/components/WorkPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Works | Om Gadhave — Developer & Freelancer",
  description:
    "Explore the projects and case studies crafted by Om Gadhave — AI-powered tools, e-commerce platforms, fitness apps, and more.",
};

export default function WorkRoute() {
  return (
    <>
      <Navbar />
      <WorkPage />
      <Footer />
    </>
  );
}
