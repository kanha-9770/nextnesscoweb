// components/FeaturedNews.tsx
"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { IoBarChartOutline } from "react-icons/io5";
import Card from '../newsfeature/Card';
import { GrAddCircle } from "react-icons/gr";
import { cardContents } from '../Constants';


const Knowmachine: React.FC = () => {
  const [openModals, setOpenModals] = useState<boolean[]>(new Array(cardContents.length).fill(false));

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
    <div className="p-6 mt-10">
      <div className="text-center"></div>
      <div className="flex justify-around space-x-6 h-[500%] mr-10">
        {cardContents.map((content, index) => (
          <div key={index} className="relative bg-white rounded-3xl shadow-lg overflow-hidden w-[35%] h-[32rem] ml-10 group">
            <Image src={content.image} alt={content.title} className="h-full w-full scale-100 group" />
            <div className="absolute top-0 right-0 m-2" onClick={() => handleOpenModal(index)} >
              <GrAddCircle size={30} className="text-white" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black flex items-center justify-start p-4 group-hover:justify-center transition-all duration-300">
              <h2 className="text-2xl group-hover:mb-[52rem] font-bold group-hover:top-0 group-hover:text-center group-hover:text-4xl transition-all text-white">{content.title}</h2>
            </div>
            <div className="absolute bottom-0 right-0 m-2 transform group-hover:scale-[600%] group-hover:bottom-32 group-hover:right-1/2 group-hover:translate-x-1/2 group-hover:translate-y-1/2 transition-transform duration-300">
              <content.icon size={40} className="text-white" />
            </div>
          </div>
        ))}
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

export default Knowmachine;
