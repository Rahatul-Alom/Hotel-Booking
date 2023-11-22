import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

const ShowRooms = ({rooms}) => {
    const {image,price_per_night, rating, room_title} = rooms || {};
    const starArray = Array.from({ length: 5 }, (_, index) => (
        <FaStar size={25} key={index} color={index < rating ? "gold" : "gray"} />
      ));
    return (
        <div className="">
        <Link to={`/rooms/${rooms._id}`}>
            <div className="card bg-base-100 shadow-xl w-full">
                <figure><img className="h-64 w-full" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-2xl text-amber-600">{room_title}</h2>
                    <h2 className="font-semibold text-xl">Price per night: ${price_per_night}</h2>
                    <p className="flex">{starArray}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Review (0)</div> 
                     </div> 
                 </div>    
            </div>
            </Link>
        </div>
    );
};

export default ShowRooms;