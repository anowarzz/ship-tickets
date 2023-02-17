import React from "react";
import { useLoaderData } from "react-router-dom";

const PaymentPage = () => {
  const bookedShip = useLoaderData();

  return (
    <div className="h-96">
      <h2 className="text-xl md:text-3xl my-5 font-bold text-center">
        Pay for your Booking Of
      </h2>
      <p className="text-center font-bold text-2xl  text-blue-600">
        {bookedShip?.title}{" "}
      </p>
    </div>
  );
};

export default PaymentPage;
