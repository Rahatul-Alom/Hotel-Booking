import { Link } from "react-router-dom";

const ShowRooms = ({rooms}) => {
    const {image,room_title} = rooms;
    return (
        <div className="">
        <Link to={`/rooms/${rooms._id}`}>
            <div className="card bg-base-100 shadow-xl w-full">
                <figure><img className="h-64 w-full" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">{room_title}</h2>
                 </div>         
            </div>
            </Link>
        </div>
    );
};

export default ShowRooms;