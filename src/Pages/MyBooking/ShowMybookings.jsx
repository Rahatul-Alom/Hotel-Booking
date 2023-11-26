import { MdOutlineUpdate, MdReviews } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import {useState } from "react";
import { Link, } from "react-router-dom";

const ShowMybookings = ({ booking, handleDelete, handleUpdateDate }) => {
  const { _id, CastomarName, price, room_title,date, image, room_id } = booking;
  console.log(booking);
    

  return (
    <div className="mx-auto max-w-6xl mt-9">
      <div className="card lg:h-72 lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="lg:h-72 lg:w-96" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Room Name: {room_title}</h2>
          <p className="text-lg mt-2">
            <b>Price Per Night: </b>${price}
          </p>
          <p className="text-lg mt-">
            <b>Booked Date: </b>
            {date}
          </p>
          <Link to={`/reviewRoom/${room_id}`}>
          <button className="btn w-40 bg-green-500 text-white font-semibold">
            <MdReviews className="text-xl" /> Add Review </button>
          </Link>
          <div className="card-actions justify-end">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn bg-amber-700 text-white font-semibold"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            ><MdOutlineUpdate className="text-xl" /> 
             Update Date
            </button>
            <dialog id="my_modal_1" className="modal">
               <form onSubmit={(e)=>handleUpdateDate(e,_id)}>
               <div className="modal-box">
                <h3 className="font-bold text-lg">Update Your Booking Date!</h3>
                  <input className="text-center mt-6" type="date" name="date" />
                    <button className="btn bg-green-500 text-white font-semibold">Update Date</button>
              </div>
            </form>
            </dialog>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-600 text-white font-semibold"
            >
              <AiOutlineDelete className="text-xl" />
              Delet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMybookings;
