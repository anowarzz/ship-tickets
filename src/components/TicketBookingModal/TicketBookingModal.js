import React from "react";
import { HiCheckCircle } from "react-icons/hi";

const TicketBookingModal = ({ shipData }) => {
  console.log(shipData);

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-middle ">
        <div className="modal-box w-11/12 max-w-3xl">
          <h3 className="font-bold  mb-1 text-center text-2xl">
            {shipData?.title}
          </h3>

          <p className="text-center md:text-xl mb-3">
            {" "}
            Booked <HiCheckCircle className="inline" />
          </p>
          <img
            src={shipData?.image}
            alt="shipImage"
            className="w-48 md:w-64 mx-auto rounded-md h-32"
          />
          <div>
            <h3 className="text-blue-500 font-bold md:text-xl">
              Your Informations
            </h3>
          </div>
          <div className="modal-action">
            <button className="btn btn-info hover:btn-success  rounded p-3 w-2/5 font-bold">
              Pay Now
            </button>

            <label htmlFor="booking-modal" className="btn">
              Go Back
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketBookingModal;
