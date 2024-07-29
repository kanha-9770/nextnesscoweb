"use client";

import { useState, useEffect ,useRef} from 'react';
import Image from 'next/image';
import styles from './History.module.css'

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
}

const events: TimelineEvent[] = [
  {
    year: '1990',
    title: 'Our History',
    description: 'Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.',
    image: '/assets/about/nessco-team.webp',
  },
  {
    year: '2000',
    title: 'Expansion',
    description: 'Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.',
    image: '/assets/about/nessco-team.webp',
  },
  {
    year: '2010',
    title: 'Technological Advancements',
    description: 'Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.',
    image: '/assets/about/nessco-team.webp',
  },
];


const Timeline = () => {
    const [currentEvent, setCurrentEvent] = useState(0);
    const [animationClass, setAnimationClass] = useState('slide-in');
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if (containerRef.current) {
          const scrollTop = containerRef.current.scrollTop;
          const sectionHeight = window.innerHeight;
          const index = Math.min(Math.floor(scrollTop / sectionHeight), events.length - 1);
  
          if (currentEvent !== index) {
            setAnimationClass('slide-out');
            setTimeout(() => {
              setCurrentEvent(index);
              setAnimationClass('slide-in');
            }, 500); // Match the duration of your slide-out animation
          }
        }
      };
  
      containerRef.current?.addEventListener('scroll', handleScroll);
  
      return () => {
        containerRef.current?.removeEventListener('scroll', handleScroll);
      };
    }, [currentEvent]);
  
    return (
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(/assets/about/nesscobg.avif)' }} />
        <div className="absolute top-16 w-full text-center">
              <h2 className="text-white text-6xl font-montserrat mr-20">Our <span className='text-red-500'> History</span></h2>
            </div>
        <div className="relative h-screen w-full overflow-y-scroll" ref={containerRef}>
       
          <div className="flex flex-col h-[300vh]">
            {events.map((event, index) => (
              <div
                key={index}
                className={`flex items-center justify-center h-screen w-full transition-opacity duration-500 ${currentEvent === index ? 'opacity-100' : 'opacity-0'} ${currentEvent === index ? animationClass : ''}`}
              >
                <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto  text-white p-10 rounded-2xl">

            

                  <div className="flex flex-col items-start justify-center w-full md:w-1/2 pr-10 mt-12">
                    <h1 className="text-9xl -ml-28 ">{event.year}</h1>
                    <p className="mt-4 w-[80%] font-montserrat text-left text-justify ml-11">{event.description}</p>
                  </div>
                  <div className="w-full md:w-1/2 pl-10">
                    <Image src={event.image} alt={event.year} width={410} height={310} objectFit="cover" className="rounded-2xl ml-16 mt-28 opacity-55  " />
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default Timeline;
