import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Monitoring from "./components/Monitoring";
import Network from "./components/Network";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <Navbar />
      <Hero />
<div className="relative -mt-20 md:-mt-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <About />
        </div>
        <Projects id="projects" />
        <div id="monitoring"><Monitoring /></div>
        <div id="network"><Network /></div>
        <Contact id="contact" />
      </div>
    </div>
  );
}
