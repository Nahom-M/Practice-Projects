import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Background from "@/components/Background";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Experiences from "@/components/Experiences";

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
      <div id="experiences">
        <Experiences />
      </div>
      <Footer />
    </div>
  );
}
