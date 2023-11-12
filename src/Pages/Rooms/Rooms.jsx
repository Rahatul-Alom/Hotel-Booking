import {useLoaderData } from "react-router-dom";
import ShowRooms from "./ShowRooms,";

const Rooms = () => {
    const rooms = useLoaderData()
    console.log(rooms)
    return (
        <div className="grid grid-cols-3 gap-9 mx-auto max-w-7xl mt-20">
            {
                rooms.map(room => <ShowRooms key={room._id} rooms = {room}></ShowRooms>)
            }
        </div>
    );
};

export default Rooms;