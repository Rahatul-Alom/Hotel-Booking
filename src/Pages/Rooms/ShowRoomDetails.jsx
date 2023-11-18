import axios from "axios";
import { MdAddHome } from "react-icons/md";
import { Link } from "react-router-dom";
const ShowRoomDetails = ({ details }) => {
  const {_id, image, room_title, price_per_night, size, special_offer, description, location } = details || {};

  return (
    <div className="flex flex-col items-center justify-center lg:flex-row mx-auto max-w-7xl my-20">
        <div className="">
            <img className="h-96 " src={image} alt="" />
        </div>
        <div className="mx-5 md:ml-7 lg:ml-9 max-w-xl">
            <h1 className="text-4xl font-bold">{room_title}</h1>
            <p className="text-lg mt-5"><b>Price per night:</b> ${price_per_night}</p>
            <p className="text-lg mt-1"><b>Room Size:</b>  {size}</p>
            <p className="text-lg mt-1"><b>Location:</b> {location}</p>
            <p className="text-lg mt-1"><b>Special Offer:</b> {special_offer}</p>
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
            <p className="text-lg text-justify mt-2"><b>Description:</b> {description}</p>
            <input className="border-2 border-black p-2 mt-4 rounded-lg" type="date" name="" id="" /> <br />
          <Link to={`/bookService/${_id}`}>
              <button className="btn mt-5 bg-[#aa825d] text-white font-semibold"><MdAddHome className="text-xl" />
            Book Now</button>
          </Link>
        </div>
    </div>
  );
};

export default ShowRoomDetails;
