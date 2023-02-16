import React from "react";
import { Link } from "react-router-dom";
import Boat from "../../assets/boat.jpg";
import Cruise from "../../assets/cruise.png";
import Gulet from "../../assets/gulet.png";
import Other from "../../assets/other.png";

const Categories = () => {
  return (
    <div className="mt-20">
      <h2 className=" pl-8 text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500 mb-8">
        Categories
      </h2>

      <div className="flex justify-around gap-4">
        <Link className="flex flex-col justify-center items-center">
          <img src={Boat} alt="" className="w-12 md:w-20" />
          <p className="text-blue-500 font-bold">Boat</p>
        </Link>
        <Link className="flex flex-col justify-center items-center">
          <img src={Cruise} alt="" className="w-12 md:w-20 h-12" />
          <p className="text-blue-500 font-bold">Cruise</p>
        </Link>
        <Link className="flex flex-col justify-center items-center">
          <img src={Gulet} alt="" className="w-12 md:w-20 h-12" />
          <p className="text-blue-500 font-bold">Gulet</p>
        </Link>
        <Link className="flex flex-col justify-center items-center">
          <img src={Boat} alt="" className="w-12 md:w-20 h-12" />
          <p className="text-blue-500 font-bold">Boat</p>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
