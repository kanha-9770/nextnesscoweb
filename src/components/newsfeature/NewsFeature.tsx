"use client";

import React, { useState } from 'react';
import Image from 'next/image'
import machine from '../../../public/assets/banner.jpg'
import team from '../../../public/assets/banner2.png'
import banner from '../../../public/assets/banner3.jpg'
import Card from './Card'
import { GrAddCircle } from "react-icons/gr";
import Carousel from '../Home/Carousel';
import { newscardcontent } from '../Constants';


const NewsFeature: React.FC = () => {
  const [openModals, setOpenModals] = useState<boolean[]>(new Array(newscardcontent.length).fill(false));

  const handleOpenModal = (index: number) => {
    const newOpenModals = [...openModals];
    newOpenModals[index] = true;
    setOpenModals(newOpenModals);
  };

  const handleCloseModal = (index: number) => {
    const newOpenModals = [...openModals];
    newOpenModals[index] = false;
    setOpenModals(newOpenModals);
  };

  return (
    <div className="p-6 bg-white">
      <div className="text-center mt-10">
        <h1 className="text-3xl font-montserrat">
          <span className="text-[#483d73]">Featured</span> <span className="text-red-600">News</span>
        </h1>
      </div>
      <div className="flex mt-5 h-3/4">
      
        <div className="relative w-1/3  ml-10">
          <div className="relative group h-[100%]">
            <img
              src={newscardcontent[0].image.src}
              alt={newscardcontent[0].title}
              className="w-full h-[120%] rounded-3xl"
            />
            <div className="absolute top-0 right-0 m-2" onClick={() => handleOpenModal(0)}>
              <GrAddCircle size={30} className="text-white" />
            </div>
            <h2 className="absolute left-5 -bottom-16
            text-3xl font-montserrat text-white font-bold transition-transform transform group-hover:-translate-y-10 duration-300">
              {newscardcontent[0].title}
            </h2>
          </div>
        </div>
        <div className="w-2/3 flex flex-col">
          <div className="flex mb-4 ml-6">
            {newscardcontent.slice(1).map((content, index) => (
              <div key={index + 1} className={`relative ${index === 0 ? 'w-1/2' : 'w-1/2 ml-6'}`}>
                <div className="relative group h-[100%]">
                  <img
                    src={content.image.src}
                    alt={content.title}
                    className="w-[120%] h-[80%] rounded-3xl"
                  />
                  <div className="absolute top-0 right-0 m-2" onClick={() => handleOpenModal(index + 1)}>
                    <GrAddCircle className="text-white text-3xl" />
                  </div>
                  {/* <div className="absolute bottom-20 left-0  w-[120%] h-[80%] bg-gradient-to-t from-black opacity-70 transition-opacity duration-300 rounded-b-3xl"> */}
                  <h2 className="absolute bottom-24 left-5 text-xl font-bold text-white transition-transform transform group-hover:-translate-y-5 duration-300">
                    {content.title}
                  </h2>
                  </div>
                  
                </div>
              
            ))}
          </div>
          <div className="relative">
            <div className="absolute flex items-end  w-[100%] h-28 -mt-3 -ml-2 rounded-3xl p-4">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
      {openModals.map((isModalOpen, index) => (
        isModalOpen && (
          <div key={index} className="fixed inset-0 flex items-center justify-center z-50">
            <Card handleCloseModal={() => handleCloseModal(index)} />
          </div>
        )
      ))}
    </div>
  );
};



export default NewsFeature;
