import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import machine from '../../../public/assets/machineman.jpeg';
import bg from '../../../public/assets/about/nesscobg.avif'; // Add your background image path here
import Link from 'next/link';

const OurStory = () => {
  return (
    <>
      <Head>
        <title>Our Story</title>
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
          <h1 className="text-5xl font-montserrat text-white mt-20">Our<span className='text-red-600'> Story</span></h1>
          <div className="mb-10 max-w-6xl mx-auto mt-6">
            <p className="text-md font-montserrat text-justify ">
            Forty years ago, we embarked on our journey in the disposable segment, working with many prominent companies and groups. Over the years, we gained invaluable experience and expertise, becoming a trusted name in the industry. To address the growing concerns of packaging waste, we shifted our focus towards sustainable alternatives.<br/>
            Twelve years ago, this vision led to the founding of <Link href={'/'}><span  className='text-[#483d73]'>Nessco India</span></Link> ,initially known as Elegant International. With a dedicated team and a commitment to innovation, we established our own research and development department to create sustainable packaging solutions.  </p>
          </div>
          <div className="flex justify-center w-full">
            <Image
              src={machine}
              width={900}
              height={400}
              alt="Our Story Image" // Adjust width as neede
              className="object-cover rounded-xl  h-72"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStory;
