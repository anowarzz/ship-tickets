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
      <img src={shipData?.image} alt="" className="mx-auto mt-12" />
    </div>
    </div>
  );
};

export default ShipDetailsPage;
