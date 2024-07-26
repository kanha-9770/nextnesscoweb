import About from "@/components/About/About";
import Sustainable from "@/components/About/Sustainable";
import OurStory from "@/components/About/OurStory";

export default function about() {


  return (
    <main className="bg-[#f5f5f5]">
     <section id="about" className="relative">
        <About />
      </section>
      <section id="sustainable" className="relative">
        <Sustainable />
      </section>
      <section id="our-story" className="relative">
        <OurStory />
      </section>
    
    </main>
  );
}