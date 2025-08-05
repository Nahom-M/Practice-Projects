import Image from "next/image";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Background from "@/components/Background";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="header">
        <Header />
      </div>
      <div id="background">
        <Background />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="awards">
        <Education />
      </div>
      <Footer />
    </div>
  );
}
