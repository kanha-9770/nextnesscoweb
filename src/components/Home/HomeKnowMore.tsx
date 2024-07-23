import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./know.module.css";
import {
  strengthImage,
  missionImage,
  companyImage,
  paperBagMachineImage,
  paperBowlMachineImage,
} from "../../../public/assets";

interface CardProps {
  id: number;
  image: StaticImageData;
  icon: StaticImageData;
  title: string;
  bgColor: string;
  description: string;
}

const cards: CardProps[] = [
  {
    id: 1,
    image: companyImage,
    icon: companyImage,
    title: "40+ years of Industry Experience",
    bgColor: "#E3342F",
    description: "With over 40 years of industry expertise...",
  },
  {
    id: 2,
    image: strengthImage,
    icon: strengthImage,
    title: "Indigenous design Industry",
    bgColor: "#38C172",
    description: "At Nessco India, our indigenous design...",
  },
  {
    id: 3,
    image: paperBagMachineImage,
    icon: paperBowlMachineImage,
    title: "Quality control and assurance",
    bgColor: "#3490DC",
    description: "Quality Control & Assurance is a cornerstone...",
  },
  {
    id: 4,
    image: strengthImage,
    icon: strengthImage,
    title: "Precision Manufacturing",
    bgColor: "#F66D9B",
    description: "We use the highest grade tooling...",
  },
  {
    id: 5,
    image: missionImage,
    icon: missionImage,
    title: "Installation, Warranty & spares Support",
    bgColor: "#F6993F",
    description: "We ensure a seamless experience...",
  },
];

const Knowmore: React.FC = () => {
  return (
    <div className={`${styles.stack} h-screen max-w-screen-2xl mx-auto overflow-y-auto snap-y`}>
      {cards.map((card) => (
        <div
          key={card.id}
          className={`${styles.stack__card} animate-fadeIn`}
          style={{ backgroundColor: card.bgColor }}
        >
          <div className="relative flex h-[50%] w-[80%] rounded-[40px]">
            <div
              className="absolute p-4 rounded-[40px] text-white items-center z-10 h-44 w-60"
              style={{ backgroundColor: card.bgColor }}
            >
              <Image
                src={card.icon}
                alt="icon"
                width={40}
                height={40}
                className={`${styles.filterwhite} ml-20 mt-2`}
              />
              <div className="flex flex-col items-center justify-center mt-2 text-center">
                {card.title.split("\n").map((line, index) => (
                  <p
                    key={index}
                    className={`font-bold font-montserrat text-lg ${
                      index === 1 ? "text-red-500" : "text-white"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex max-w-screen-2xl w-full h-full">
              <div className="w-1/2 flex items-center justify-center">
                <Image
                  src={card.image}
                  className="h-full w-full object-cover rounded-[40px] scale-90"
                  alt={card.title}
                  width={400}
                  height={400}
                />
              </div>
              <div className="w-2/5 flex items-center justify-center p-6 ml-10">
                <p className="text-white text-xl font-montserrat leading-10 text-center">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Knowmore;
