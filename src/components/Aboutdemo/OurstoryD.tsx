import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import bg from '../../../public/assets/about/nesscobg.avif'; // Add your background image path here
import { ourStoryContent } from '../Constants/About/StoryD-page'; // Import the dynamic content
import styles from './Story.module.css'

const OurStoryD = () => {
  const { title, highlight, paragraphs, highlightedText, image } = ourStoryContent;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="relative min-h-screen text-white px-4">
        <div className="absolute inset-0">
          <Image 
            src={bg} 
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-[96%]"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-5xl font-montserrat text-white mt-20">{title}<span className=''> {highlight}</span></h1>
          <div className="mb-10 max-w-4xl mx-auto mt-6">
           {paragraphs}
          </div>
          <div className="flex justify-center w-full">
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              className={`object-cover rounded-xl h-80 ${styles.scaleup}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStoryD;
