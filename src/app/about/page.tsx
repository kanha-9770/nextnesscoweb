import About from "@/components/About/About";
import Sustainable from "@/components/About/Sustainable";
import OurStory from "@/components/About/OurStory";
import Founders from "@/components/About/OurFounder";
import TeamPage from "@/components/About/TeamPage";
import Grid from "@/components/About/Grid";
import OurHistory from "@/components/About/OurHistory";
import { events } from "@/components/Constants";

import AboutD from "@/components/Aboutdemo/AboutD";
import SustainableD from "@/components/Aboutdemo/SustainableD";
import OurStoryD from "@/components/Aboutdemo/OurstoryD";

export default function about() {


  return (
    <main className="bg-black ">

<AboutD />
<SustainableD/>
<OurStoryD/>
<Founders/> 
<TeamPage/>



      
     {/* <section id="about" className=" relative h-screen">
        <About />
      </section>
       <section id="sustainable" className="relative h-screen">
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
      
      

       {/* <section id="team" className="relative">
      <OurHistory />
      </section>  */}
      {/* <section id="team" className="relative">
      <TeamPage/>
      </section> */}
      
    

    
    </main>
  );
}