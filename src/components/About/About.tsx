"use client";

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { gsap } from 'gsap/gsap-core';
import Sustainable from './Sustainable';
import { sections } from '../Constants/About/About-page'; // Import the sections array

const videoSources = [
  { src: 'video/bg.mp4', type: 'video/mp4' },
  { src: 'video/bg2.mp4', type: 'video/mp4' },
];

const About = () => {
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
      <div className="h-screen">
        <div className="inset-0 overflow-hidden">
          {videoSources.map((video, index) => (
            <video
              key={index}
              className={`absolute inset-0 min-h-full min-w-full object-cover transition-opacity duration-75 ${
                index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
              }`}
              autoPlay
              loop
              muted
            >
              <source src={video.src} type={video.type} />
            </video>
          ))}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white mt-20">
          <h1 className="text-5xl font-montserrat">About <span className="text-red-600">Us</span></h1>
          <p className="mt-4 text-lg font-montserrat">Begins and End with Customer's Smile</p>
        </div>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="relative z-10 flex flex-col items-start justify-start text-left text-white mt-20 px-8">
            <h2 className="text-5xl font-montserrat">{section.title}</h2>
            <h2 className="text-5xl font-bold font-style: italic mt-2">{section.subtitle} <span className="text-red-600">{section.highlight}</span></h2>
            <div className="relative z-10 w-full flex justify-center space-x-10 text-white top-36">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex} className="flex flex-col items-center text-center">
                  <img src={item.image} alt={item.alt} className="h-12 mb-2 filter invert" />
                  <div className='text-center'>
  <p className='text-sm w-[9rem] '>
    {item.description.split(' ').map((word, i) => (
      i > 0 && word.toLowerCase() === 'of' ? <><br key={i}/>{word}</> : word
    )).reduce<React.ReactNode[]>((prev, curr) => prev.concat(' ', curr), [])}
  </p>
</div>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
