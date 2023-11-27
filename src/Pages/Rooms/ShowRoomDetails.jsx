import { useEffect, useState } from "react";
import { MdAddHome } from "react-icons/md";
import { Link, } from "react-router-dom";
import ShowReview from "./ShowReview";
const ShowRoomDetails = ({ details }) => {
  const {_id, image, room_title, price, size, special_offer, description, location} = details || {};

  const [reviews, setReviews] = useState({});
  console.log(reviews)
   
  useEffect(() => {
      if(_id){
        fetch(`http://localhost:5000/reviews/${_id}`)
        .then(res => res.json())
        .then(data => setReviews(data))
      }
  }, [_id]);

  return (
      <div>
        <div className="flex flex-col items-center justify-center lg:flex-row mx-auto max-w-7xl my-20">
        <div className="">
            <img className="h-96 " src={image} alt="" />
        </div>
        <div className="mx-5 md:ml-7 lg:ml-9 max-w-xl">
            <h1 className="text-4xl font-bold">{room_title}</h1>
            <p className="text-lg mt-5"><b>Price per night:</b> ${price}</p>
            <p className="text-lg mt-1"><b>Room Size:</b>  {size}</p>
            <p className="text-lg mt-1"><b>Location:</b> {location}</p>
            <p className="text-lg mt-1"><b>Special Offer:</b> {special_offer}</p>
            <p className="text-lg text-justify mt-2"><b>Description:</b> {description}</p>
            <input className="border-2 border-black p-2 mt-4 rounded-lg" type="date" name="" id="" /> <br />
          <Link to={`/bookRoom/${_id}`}>
              <button className="btn mt-5 bg-amber-700 text-white font-semibold"><MdAddHome className="text-xl" />
            Book Now</button>
          </Link>
        </div>
    </div>
     {/* Display reviews */}
      <div className="mx-auto max-w-7xl">
      {Object.keys(reviews).length > 0  ? (
          <ShowReview reviews={reviews} />
        ) : (
          <p className="text-xl font-bold text-amber-700 text-center mt-2">No review yet.</p>
        )}
      </div>
  </div>
  );
};

export default ShowRoomDetails;
