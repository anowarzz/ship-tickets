import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { AiOutlineCalendar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";



const TicketBookingModal = ({ shipData }) => {
  console.log(shipData);

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-middle ">
        <div className="modal-box w-11/12 max-w-2xl">
          <h3 className="font-bold  mb-1 text-center text-2xl">
            {shipData?.title}
          </h3>

          <p className="text-center md:text-xl mb-1">
            {" "}
            Booked <HiCheckCircle className="inline" />
          </p>
          <img
            src={shipData?.image}
            alt="shipImage"
            className="w-48 md:w-64 mx-auto rounded-md h-32 mb-4"
          />
          <div className="pl-6  mt-8 ">
            <h3 className="text-blue-500 font-bold md:text-xl mb-2 text-center ">
              Your Informations
            </h3>
           <div>
           <p className="text-sm font-semibold text-red-500 mb-1">Full Name</p>
           
<input type="text" placeholder="Type here" defaultValue="Donald John Trump" className="input  input-sm w-full max-w-ful" />
            <hr className="border px-6"/>
           </div>

<div className="flex justify-around mt-4">
    <div>
       <p className="text-red-500 font-semibold">
        Check In
       </p>
       <p>  <AiOutlineCalendar className="inline"/> 17 February</p>
    </div>
    <div>
       <p className="text-red-500 font-semibold mt-1">
        Check Out
       </p>
       <p>
       <AiOutlineCalendar className="inline"/> 20 February</p>
    </div>
</div>
<div className="mt-2">
<p className="text-sm font-semibold text-red-500 mb-1">Location</p>


<input type="text" placeholder="Type here" defaultValue="Sydney, Australia" className="input  input-sm w-full max-w-ful" />

            <hr className="border px-6"/>
    </div>

           
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
