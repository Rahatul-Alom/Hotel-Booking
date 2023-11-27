import { Link, } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from "react";

const ShowRooms = ({rooms}) => {
    const {_id,image,price, room_title} = rooms || {};

    const [reviews, setReviews] = useState([])
    console.log(reviews)



    useEffect(()=>{
        fetch(`http://localhost:5000/reviews/${_id}`)
             .then(res => res.json())
            .then(data => setReviews(data))
    },[_id])

    console.log(_id)

    const calculateAverageRating = () => {
        if (reviews.length === 0) {
          return 0; 
        }
    
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        return totalRating / reviews.length;
      };
    
      const averageRating = calculateAverageRating();
      const starArray = Array.from({ length: 5 }, (_, index) => (
        <FaStar size={25} key={index} color={index < averageRating ? "gold" : "gray"} />
      ));
    return (
        <div className="">
        <Link to={`/rooms/${rooms._id}`}>
            <div className="card bg-base-100 shadow-xl w-full">
                <figure><img className="h-64 w-full" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-2xl text-amber-600">{room_title}</h2>
                    <h2 className="font-semibold text-xl">Price per night: ${price}</h2>
                    <p className="flex">{starArray}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Review ({reviews.length})</div> 
                     </div> 
                 </div>    
            </div>
            </Link>
        </div>
    );
};

export default ShowRooms;