import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShipList from "../../data/ships.json";

const PopularSection = () => {
  const [ships, setShips] = useState(ShipList);



  return (
    <div>
      <h2 className="text-blue-500 font-bold text-2xl md:text-4xl lg:text-4xl mt-24 pl-8">
        Popular For You
      </h2>

      <div className="grid  sm:grid-cols-2 lg:grid-cols-3 mx-auto">
        {ships.length > 0 &&
          ships.map((ship) => {
            return (
              <Link className="my-8 px-8" to={`/ships/${ship?.id}`}>
                <h5 className="text-teal-600 text-2xl md:text-3xl lg:text-4xl mb-6">
                  {ship?.title}
                </h5>
                <img src={ship?.image} alt="" className="w-64 h-48 rounded" />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default PopularSection;
