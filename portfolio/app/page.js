import Image from "next/image";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Background from "@/components/Background";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Background />
      <Projects />
    </div>
  );
}
