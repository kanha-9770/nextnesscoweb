"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SecondPage = () => {
  const mandalaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (mandalaRef.current) {
      gsap.fromTo(
        mandalaRef.current,
        { scale: 0.5 },
        {
          scale: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: mandalaRef.current,
            start: "top 80%", // Adjust this value as needed
            end: "top 20%",
            scrub: 1,
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="relative w-full max-w-screen-lg flex items-center">
        <div className="flex-1 relative right-40">
          <div  className="absolute inset-0 flex justify-center items-center w-[43rem] h-[87vh] -mt-10">
            <Image
              src="/assets/pinkcity/mandala.svg" // Update with your Mandala image path
              alt="Mandala Design"
              layout="fill"
              objectFit="cover"
              ref={mandalaRef}
              className="object-contain -ml-24 h-[30rem] w-[40rem] "
            />
          </div>
          <div className="relative z-10 w-5/6 h-96 xl:h-96 left-20">
            <Image
              src="/assets/pinkcity/palaceimg.jpeg" // Update with your top image path
              alt="Jaipur"
              layout="fill"
              objectFit="cover"
              className="shadow-lg rounded-xl mt-8"
            />
          </div>
        </div>
        <div className="flex-1 relative top-28 right-28">
          <div className="absolute inset-0 flex justify-end items-start h-full w-[40rem] ">
            <Image
              src="/assets/pinkcity/strokerimg.svg" // Update with your stroke image path
              alt="Stroke"
              layout="fill"
              objectFit="cover"
              className="object-contain"
            />
          </div>
          <div className="relative z-10 left-16">
            <p className="text-gray-700 text-md p-2 font-poppins  ">
              Jaipur, known as the <span className="text-pink-600 font-semibold">Pink City</span>, is the capital of Rajasthan, India. Renowned for its rich history and stunning architecture, the city boasts majestic forts, palaces, and vibrant bazaars. Iconic landmarks like the <span className="text-orange-500 font-semibold">Hawa Mahal</span>, City Palace, and Amber Fort reflect Jaipur's royal heritage. The city is also famous for its traditional arts and crafts, making it a hub for cultural enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
