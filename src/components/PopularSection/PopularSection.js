import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import ShipList from "../../data/ships.json";

const PopularSection = () => {


 //  state to store the ship data
  const [ships, setShips] = useState([]);


  // state to track the loading phase
  const [loading, setLoading] = useState(false)


// fetching ship data 

  useEffect(() => {
    setLoading(true)
    fetch("https://ship-ticket-server.vercel.app/ships")
      .then((res) => res.json())
      .then((data) => {
        setShips(data)
        setLoading(false)
      });
  }, []);





  return (
    <div>
      <h2 className="text-blue-500 font-bold text-2xl md:text-4xl lg:text-4xl mt-24 pl-8">
        Popular For You
      </h2>

      {
        loading && <h3 className="text-center text-2xl md:text-3xl lg-text-4xl">Loading....</h3>
      }

      <div className="grid  sm:grid-cols-2 lg:grid-cols-3 mx-auto">
        {ships.length > 0 &&
          ships.map((ship) => {
            return (
              <Link className="my-8 px-8 hover:text-teal-600 mx-auto" to={`/shipsDetail/${ship?.id}`} key={ship.id}>
                <h5 className="text-gray-700 text-xl font-semibold md:text-2xl mb-2 text-center hover:text-teal-500">
                  {ship?.title}
                </h5>
                <img src={ship?.image} alt="" className="w-64 h-48 rounded hover:border-blue-500 border-2 border-transparent p-2 " />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default PopularSection;
