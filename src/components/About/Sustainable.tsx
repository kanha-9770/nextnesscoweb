"use client";

import Head from 'next/head';
import { useState,useEffect } from 'react';
import cupdis from '../../../public/assets/coffee-cup.png'
import userset from '../../../public/assets/management-consulting.png'
import sustainableimg from '../../../public/assets/save-nature - Copy.png'
import { gsap } from 'gsap/gsap-core';
import Image from 'next/image';
import bg from '../../../public/assets/about/sustainable.jpeg'
import { SlArrowRight } from 'react-icons/sl';
import styles  from '../About/about.module.css'


const Sustainable = () => {
  
  return (
    <>
      <div className=" relative h-screen">
        <div className="absolute inset-0">
          <Image 
            src={bg} 
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-screen">
          <h1 className="text-5xl font-montserrat -mt-[14%] ">The Future Is <span className="text-red-600">Sustainable </span></h1>
          <p className="mt-10 text-sm font-montserrat px-4 md:px-32 text-center">Our food packaging machines are designed for efficiency and sustainability, utilizing eco-friendly materials to minimize waste. We help businesses adopt greener practices, ensuring top-quality packaging with reduced environmental impact.</p>
          
            <div className={`${styles.container}`}> 
              <button className={styles.button}> 
                Explore Solutions
                <SlArrowRight className={styles.icon} /> 
              </button>
            </div>
          
        </div>
      </div>
    </>
  );
}

export default Sustainable;
