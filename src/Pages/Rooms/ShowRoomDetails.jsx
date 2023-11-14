import { MdAddHome } from "react-icons/md";
const ShowRoomDetails = ({ details }) => {
  const { image, room_title, price_per_night, size, special_offer, description } = details;
  return (
    <div className="flex flex-col justify-center lg:flex-row mx-auto max-w-7xl my-20">
        <div className="">
            <img className="h-96 " src={image} alt="" />
        </div>
        <div className="mx-5 md:ml-7 lg:ml-9 max-w-xl">
            <h1 className="text-4xl font-bold">{room_title}</h1>
            <p className="text-lg mt-5"><b>Price per night:</b> ${price_per_night}</p>
            <p className="text-lg mt-1"><b>Room Size:</b>  {size}</p>
            <p className="text-lg mt-1"><b>Special Offer:</b> {special_offer}</p>
            <p className="text-lg text-justify mt-2"><b>Description:</b> {description}</p>
            <button className="btn mt-5 bg-[#aa825d] text-white font-semibold"><MdAddHome className="text-xl" />
            Book Now</button>
        </div>
    </div>
  );
};

export default ShowRoomDetails;
