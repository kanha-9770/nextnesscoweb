"use client";

import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { gsap } from 'gsap/gsap-core';
import { sections } from '../Constants/About/AboutD-page' // Import the sections array

const videoSources = [
  { src: 'video/bg.mp4', type: 'video/mp4' },
  { src: 'video/bg2.mp4', type: 'video/mp4' },
];

const AboutD = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    }, 10000); // Change video every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div className="h-screen bg-black">
        <div className="inset-0 overflow-hidden space-x-6 ">
        
            <video
              className="absolute inset-0 h-[90%] w-full object-cover transition-opacity duration-75 scale-95 rounded-tr-xl rounded-tl-xl top-16"
              autoPlay
              loop
              muted
            >
                <source src= 'assets/about/desert.mp4' type= 'video/mp4' />
            </video>
   
            <div className="absolute bottom-0 left-0 w-[77rem] h-52 bg-gradient-to-t from-black to-transparent"></div>        </div>
        
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="relative z-10 flex flex-col justify-center items-end text-center text-white px-36 top-72 ">
            <h2 className="text-3xl font-montserrat ">"Excellence In Innovation &</h2>
            <h2 className="text-3xl font-montserrat mt-2 mr-36">{section.subtitle} <span className="text-white">{section.highlight} "</span></h2>
            <div className="relative z-10 w-full flex justify-end space-x-14 text-white top-[4rem] left-20">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex} className="flex flex-col items-center text-center relative ">
                  <Image 
                    src={item.image} 
                    alt={item.alt} 
                    width={50} // set appropriate width
                    height={50} // set appropriate height
                    className="h-auto mb-2 filter invert p-1" 
                  />
                  <div className='text-center'>
                    <p className='text-sm w-[9rem]'>
                      {item.description.split(' ').map((word, i) => (
                        i > 0 && word.toLowerCase() === 'of' ? <><br key={i}/>{word}</> : word
                      )).reduce<React.ReactNode[]>((prev, curr) => prev.concat(' ', curr), [])}
                    </p>
                  </div>
                  {itemIndex < section.content.length - 1 && (
                    <div className="absolute -right-5 h-full border-r-2 border-white" style={{ top: 0, height: '125%' }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
          <div className="absolute bottom-9 left-20 text-white text-8xl font-alexBrush">
          Our Company
        </div>
      </div>
    </>
  );
};

export default AboutD;
