import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TicketBookingModal from "../../components/TicketBookingModal/TicketBookingModal";

const ShipDetailsPage = () => {

  // Single Ship data
  const shipData = useLoaderData();

  // state to manage the toggle of booking modal
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <div>
      <h4 className="text-4xl font-bold my-12 text-center">
        {shipData?.title}
      </h4>

      <div className="flex justify-center gap-4">
        <p className="badge badge-primary">Price ${shipData.price}</p>
        <p className="badge badge-info">Speed {shipData.speed}</p>
      </div>

      <div className="">
        <img
          src={shipData?.image}
          className="w-72 md:w-96 mx-auto mt-8 h-48"
          alt=""
        />

        <p className="text-center my-8">Please Select Your Seat</p>

        <img
          src={shipData?.seatsImg}
          alt=""
          className="mx-auto mt-8"
          useMap="#boatSeat"
        />

        <map name="boatSeat">
          <area
            shape="rect"
            coords="81,175,82,289"
            alt="seatImage"
            title="Book this seat"
            className="pointer"
          />

          <area
            shape="rect"
            coords="79,286,126,284"
            alt="seatImage"
            title="Book this seat"
            className="pointer"
          />

          <area
            shape="rect"
            coords="126,288,124,174"
            alt="seatImage"
            title="Book this seat"
            className="pointer"
          />

          <area
            shape="rect"
            coords="104,262,106,183"
            alt="seatImage"
            title="Book this seat"
            className="pointer"
          />
        </map>
      </div>

      <div className="text-center">
        <label htmlFor="booking-modal" className="btn bg-success rounded-md py-2 mt-8 border-none w-2/6 md:w-1/4" onClick={() => setShowBookingModal(true)}>Book Now</label>
      </div>

      {showBookingModal && <TicketBookingModal shipData={shipData}/>}
    </div>
  );
};

export default ShipDetailsPage;
