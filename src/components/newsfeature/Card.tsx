import React from 'react';
import { ImCross } from "react-icons/im";

interface CardProps {
    handleCloseModal: () => void;
  }
  
  const Card: React.FC<CardProps> = ({ handleCloseModal }) => {
    return (
      <div className="p-1 top-6 bg-white h-[88%] w-[95%] rounded-3xl shadow-md relative bottom-5">
        <div className="absolute top-4 left-[97%] mt-2">
          <ImCross
            size={15}
            className="cursor-pointer"
            onClick={handleCloseModal}
          />
        </div>
        {/* Add more content here */}
      </div>
    );
  };

export default Card;
