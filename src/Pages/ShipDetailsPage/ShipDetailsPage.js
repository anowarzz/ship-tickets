import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import TicketBookingModal from "../../components/TicketBookingModal/TicketBookingModal";

const ShipDetailsPage = () => {
  // Single Ship data
  const shipData = useLoaderData();

  // state to disable and enable the booking button
  const [seatSelected, setSeatSelected] = useState(false);

  // state to manage the toggle of booking modal
  const [showBookingModal, setShowBookingModal] = useState(false);

  // function to handle selected seat

  const handleSeatSelection = () => {
    setSeatSelected(!seatSelected);
    handleToast();
  };

  const handleToast = () => {
    if (!seatSelected) {
      toast.success("Seat Selected", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    if (seatSelected) {
      toast.success("Seat Canceled!", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

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

        <p className="text-center my-8">
          Please Select Your Seat from the image below
        </p>

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
            onClick={handleSeatSelection}
          />

          <area
            shape="rect"
            coords="79,286,126,284"
            alt="seatImage"
            title="Book this seat"
            className="pointer"
            onClick={handleSeatSelection}
          />

          <area
            shape="rect"
            coords="126,288,124,174"
            alt="seatImage"
            title="Book this seat"
            className="pointer"
            onClick={handleSeatSelection}
          />

          <area
            shape="rect"
            coords="104,262,106,183"
            alt="seatImage"
            title="Book this seat"
            className="pointer"
            onClick={handleSeatSelection}
          />
        </map>
      </div>

      <div className="text-center">
        {seatSelected ? (
          <label
            htmlFor="booking-modal"
            className="btn bg-success rounded-md py-2 mt-8 border-none w-2/6 md:w-1/4"
            onClick={() => setShowBookingModal(true)}
          >
            Book Now
          </label>
        ) : (
          <button
            disabled
            className="btn bg-success rounded-md py-2 mt-8 border-none w-2/6 md:w-1/4"
            onClick={() => setShowBookingModal(true)}
          >
            Select a Seat First
          </button>
        )}
      </div>

      {showBookingModal && <TicketBookingModal shipData={shipData} />}

      <ToastContainer />
    </div>
  );
};

export default ShipDetailsPage;
