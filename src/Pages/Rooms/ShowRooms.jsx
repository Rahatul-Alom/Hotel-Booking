import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

const ShowRooms = ({rooms}) => {
    const {image,price_per_night, rating} = rooms || {};
    const starArray = Array.from({ length: 5 }, (_, index) => (
        <FaStar size={25} key={index} color={index < rating ? "gold" : "gray"} />
      ));
    return (
        <div className="">
        <Link to={`/rooms/${rooms._id}`}>
            <div className="card bg-base-100 shadow-xl w-full">
                <figure><img className="h-64 w-full" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="font-semibold text-xl">Price per night: ${price_per_night}</h2>
                    <p className="flex">{starArray}</p>

                 </div>         
            </div>
            </Link>
        </div>
    );
};

export default ShowRooms;