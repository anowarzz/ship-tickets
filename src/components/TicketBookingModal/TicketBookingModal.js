import React, { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { AiOutlineCalendar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaBed } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { MdPool } from "react-icons/md";
import { CiGlass } from "react-icons/ci";
import { GrAddCircle } from "react-icons/gr";
import { Link } from "react-router-dom";

const TicketBookingModal = ({ shipData, handleSeatSelection }) => {
  console.log(shipData);



const [facilitySelected, setFacilitySelected] = useState(false)


  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-middle ">
        <div className="modal-box w-11/12 max-w-2xl">
          <h3 className="font-bold  mb-1 text-center text-2xl">
            {shipData?.title}
          </h3>

          <p className="text-center  mb-1">
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
              <p className="text-sm font-semibold text-red-500 mb-1">
                Full Name
              </p>

              <input
                type="text"
                placeholder="Type here"
                defaultValue="Donald John Trump"
                className="input  input-sm w-full max-w-ful"
              />
              <hr className="border px-6" />
            </div>

            <div className="flex justify-around mt-4">
              <div>
                <p className="text-red-500 font-semibold">Check In</p>
                <p>
                  {" "}
                  <AiOutlineCalendar className="inline" /> 17 February
                </p>
              </div>
              <div>
                <p className="text-red-500 font-semibold mt-1">Check Out</p>
                <p>
                  <AiOutlineCalendar className="inline" /> 20 February
                </p>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm font-semibold text-red-500 mb-1 inline">
                Location
              </p>
              <GoLocation className="inline pl-2" />

              <input
                type="text"
                placeholder="Type here"
                defaultValue="Sydney, Australia"
                className="input  input-sm w-full max-w-ful"
              />

              <hr className="border px-6" />
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg md:tex-xl font-bold">Facilities</h3>

            <div className="mt-2 flex flex-wrap gap-2">
              <button className="badge border p-4 badge-ghost hover:badge-success font-bold">
                {" "}
                <FaBed className="inline mr-2" /> Bedroom
              </button>
              <button className="badge border p-4 badge-ghost hover:badge-success font-bold">
                {" "}
                <FiMonitor className="inline mr-2" /> Television
              </button>
              <button className="badge border p-4 badge-ghost hover:badge-success font-bold">
                {" "}
                <CiGlass className="inline mr-2" /> Bar
              </button>
              <button className="badge border p-4 badge-ghost hover:badge-success font-bold">
                {" "}
                <MdPool className="inline mr-2" /> Pool
              </button>
              <button className="badge border p-4 badge-ghost hover:badge-success font-bold">
                {" "}
                <GrAddCircle className="inline mr-2" /> Add
              </button>
            </div>
          </div>

          <div className="modal-action">
            <Link
              to={`/payment/${shipData?.id}`}
              key={shipData.id}
              className="btn btn-info hover:btn-success  rounded p-3 w-2/5 font-bold"
            >
              Pay Now
            </Link>

            <label
              htmlFor="booking-modal"
              className="btn"
              onClick={handleSeatSelection}
            >
              Go Back
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketBookingModal;
