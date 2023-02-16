import React from "react";
import { useLoaderData } from "react-router-dom";

const ShipDetailsPage = () => {



    const shipData = useLoaderData() ;

console.log(shipData);


  return (
    <div>
      <h4 className="text-4xl font-bold my-12 text-center">{shipData?.title}</h4>



    <div className="flex justify-center gap-4">
    <p className="badge badge-primary">Price ${shipData.price}</p>
      <p className="badge badge-info">Speed {shipData.speed}</p>
    </div>

    <div>
      <p className="text-center mt-8">Please Select Your Seat</p>
      <img src={shipData?.seatsImg} alt="" className="mx-auto mt-12" />


      
    </div>

    <div className="text-center">
      <button className="btn bg-success rounded-md py-2 mt-8 border-none w-2/6 md:w-1/4">Book Now</button>
    </div>
    </div>
  );
};

export default ShipDetailsPage;
