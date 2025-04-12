import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ text, img, des, link }) => {

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden max-w-sm">
      <Link to={link}>
        <div onClick={()=>{
            setIsLoading(!isLoading)
        }} className="bg-[#96005A] cursor-pointer text-white text-center py-2 font-semibold">
          {text}
        </div>
      </Link>

      <img src={img} alt={text} className="w-full h-48 object-cover" />
      <div className="p-4 text-gray-700 text-sm">{des}</div>
      <div className="border-t px-4 py-2 text-center text-[#96005A] font-semibold cursor-pointer hover:underline">
        View Prices
      </div>
    </div>
  );
};

export default Card;
