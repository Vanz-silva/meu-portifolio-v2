"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import ResponsiveGrid from "@/sections/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import MatrixSection from "@/components/MatrixSection";
import Contato from "@/components/Contato";
import Lottie from "@/components/Lottie"


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <MatrixSection />
        <Lottie />
      </main>
      <Contato />
      <Footer />
    </>
  );
}
