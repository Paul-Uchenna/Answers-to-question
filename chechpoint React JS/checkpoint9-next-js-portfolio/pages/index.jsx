// pages/index.js
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import Project from "@/Components/Project";
import Footer from "@/Components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <main className={`overflow-x-hidden ${inter.className}`}>
      <div>
        <Navbar />
        <Hero />
        <div className="relative z-30">
          {/* <About />
          <Skills />
          <Project />
          <Footer /> */}
        </div>
      </div>
    </main>
  );
}

export default Home;
