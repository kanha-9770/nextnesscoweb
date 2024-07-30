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
    year: '1991',
    title: 'Expansion',
    description: 'Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.',
    image: '/assets/about/nessco-team.webp',
  },
  {
    year: '1992',
    title: 'Technological Advancements',
    description: 'Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.',
    image: '/assets/about/nessco-team.webp',
  },
  {
    year: '1993',
    title: 'Technological Advancements',
    description: 'Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.',
    image: '/assets/about/nessco-team.webp',
  },
  {
    year: '2010',
    title: 'Technological Advancements',
    description: 'Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.',
    image: '/assets/about/nessco-team.webp',
  },
  {
    year: '2011',
    title: 'Technological Advancements',
    description: 'Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.',
    image: '/assets/about/nessco-team.webp',
  },
  {
    year: '2012',
    title: 'Technological Advancements',
    description: 'Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.',
    image: '/assets/about/nessco-team.webp',
  },
  {
    year: '2013',
    title: 'Technological Advancements',
    description: 'Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.',
    image: '/assets/about/nessco-team.webp',
  },
];
const Timeline = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const yearSuffixRefs = useRef<(HTMLDivElement | null)[]>([]);
  const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const yearPrefix = useRef<string>('');
  const [previousYear, setPreviousYear] = useState(events[0].year);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        const sectionHeight = window.innerHeight;
        const index = Math.min(Math.floor(scrollTop / sectionHeight), events.length - 1);

        if (currentEvent !== index) {
          setCurrentEvent(index);
        }
      }
    };

    containerRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      containerRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, [currentEvent]);
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        const sectionHeight = window.innerHeight;
        const index = Math.min(Math.floor(scrollTop / sectionHeight), events.length - 1);

        if (currentEvent !== index) {
          setCurrentEvent(index);
        }
      }
    };

    containerRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      containerRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, [currentEvent]);

  useEffect(() => {
    const currentYear = events[currentEvent].year;
    const prevYear = events[currentEvent === 0 ? 0 : currentEvent - 1].year;

    if (currentYear.slice(0, 2) !== prevYear.slice(0, 2)) {
      setPreviousYear(prevYear);
      yearPrefix.current = currentYear.slice(0, 2);
    }
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
              className={`flex items-center justify-center h-screen w-full transition-opacity duration-500 ${currentEvent === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto text-white p-10 rounded-2xl">
                <div className="flex flex-col items-start justify-center w-full md:w-1/2 pr-10 mt-16">
                  <div className={`${styles['year-animation']}`}>
                    <div className={`${styles['year-animation__prefix']}`}>
                      {event.year.slice(0, 2)}
                    </div>
                    <div
                      className={`${styles['year-animation__suffix']} ${currentEvent === index ? styles['year-animation__suffix--changing'] : ''}`}
                      ref={(el) => {
                        if (el) {
                          yearSuffixRefs.current[index] = el;
                        }
                      }}
                    >
                      {event.year.slice(2)}
                    </div>
                  </div>
                  <p
                    className={`mt-4 w-[80%] font-montserrat text-left text-justify ml-36 ${styles['slide-in']}`}
                    ref={(el) => {
                      if (el) {
                        descriptionRefs.current[index] = el;
                      }
                    }}
                  >
                    {event.description}
                  </p>
                </div>
                <div className="w-full md:w-1/2 pl-10 mt-5">
                  <Image
                    src={event.image}
                    alt={event.year}
                    width={410}
                    height={310}
                    objectFit="cover"
                    className={`rounded-2xl ml-16 mt-28 ${styles['image-animation']}`}
                    ref={(el) => {
                      if (el) {
                        imageRefs.current[index] = el;
                      }
                    }}
                  />
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