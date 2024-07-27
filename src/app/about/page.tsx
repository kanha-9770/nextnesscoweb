import About from "@/components/About/About";
import Sustainable from "@/components/About/Sustainable";
import OurStory from "@/components/About/OurStory";
import Founders from "@/components/About/OurFounder";
import Gallery from "@/components/About/Gallery";

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
      <section id="our-story" className="relative">
        <Founders/>
      </section>
      <section id="our-story" className="relative">
        <Gallery/>
      </section>
    
    </main>
  );
}