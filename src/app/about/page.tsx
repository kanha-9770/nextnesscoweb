import About from "@/components/About/About";
import Sustainable from "@/components/About/Sustainable";
import OurStory from "@/components/About/OurStory";
import Founders from "@/components/About/OurFounder";
import TeamPage from "@/components/About/TeamPage";
import Grid from "@/components/About/Grid";
import OurHistory from "@/components/About/OurHistory";


export default function about() {


  return (
    <main className="bg-black">
     {/* <section id="about" className="relative">
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
        <Grid/>
      </section> */}
      <section id="team" className="relative">
        <OurHistory/>
      </section>
    

    
    </main>
  );
}