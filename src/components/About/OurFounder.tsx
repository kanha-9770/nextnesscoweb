import Image from 'next/image';
import React from 'react';
import { GrAddCircle } from 'react-icons/gr';
import styles from './about.module.css'

interface FounderProps {
    name: string;
    title: string;
    description: string;
    imageSrc: string;
    linkedInUrl: string;
  }

const FounderCard:React.FC<FounderProps>= ({ name, title, imageSrc, linkedInUrl,description }) => (
    <div className={styles.card}>
    {/* Image container */}
    <div className={styles.imageContainer} >
      <Image
        className={styles.image}
        src={imageSrc}
        alt={name}
        width={300}
        height={400}
      />
      <div className={styles.icons}>
        <GrAddCircle />
      </div>
    </div>

    {/* Content */}
    <div className={styles.content}>
      <h3 className={`${styles.nameTitle} mt-5`}>
        {name}
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className={styles.linkedinIcon}>
          <img src="/assets/about/linkedin.png" alt="LinkedIn" className="inline-block w-5 h-5" />
        </a>
      </h3>
      <p className='pb-3'>{title}</p>

      {/* Hidden box for description */}
      <div className={styles.descriptionContainer}>
      <h3 className='font-bold font-montserrat text-lg mt-1'>{name} </h3>
      <p className='font-montserrat mb-3'>{title}</p>
        <p className="text-black font-montserrat leading-5">{description}</p>
      </div>
    </div>
  </div>
  
);

const Founders = () => (
  <div className="bg-black text-white py-16 min-h-screen">
    <h2 className="text-center text-5xl font-montserrat mb-8">
      Our <span className="text-red-600">Founders</span>
    </h2>
    <div className="flex justify-center  space-x-8 w-5/6 ml-28">
      <FounderCard
        name="Mr Harshit Agarwal"
        title="Director and CEO"
         description="We innovate with sustainability at our core, transforming challenges into eco-friendly solutions for a better future."
       imageSrc="/assets/about/nessco-team.webp"
        linkedInUrl="#"
      />
      <FounderCard
        name="Mr Gopal Lal Gupta"
        title="Director and CEO"
         description="We innovate with sustainability at our core, transforming challenges into eco-friendly solutions for a better future."
       imageSrc="/assets/about/nessco-team.webp"
        linkedInUrl="#"
      />
      <FounderCard
        name="Mr Yogesh Agarwal"
        title="Director and CEO"
         description="We innovate with sustainability at our core, transforming challenges into eco-friendly solutions for a better future."
       imageSrc="/assets/about/nessco-team.webp"
        linkedInUrl="#"
      />
    </div>
  </div>
);

export default Founders;
