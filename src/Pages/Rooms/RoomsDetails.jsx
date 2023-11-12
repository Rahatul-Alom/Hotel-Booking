import { useLoaderData, useParams } from "react-router-dom";
import ShowRoomDetails from "./ShowRoomDetails";
import { useEffect, useState } from "react";

const ShowRoomsDetails = () => {
    const [details, setDetails] = useState([])
    const {_id} = useParams()

    const roomDetails = useLoaderData();
    console.log(roomDetails)

    useEffect(()=>{
        const seeRoomDetails = roomDetails.find((roomDetail)=> roomDetail._id === _id)
        setDetails(seeRoomDetails)
    },[_id,roomDetails])

   
    return (
        <div>
           {
             <ShowRoomDetails roomDetails={roomDetails}  ></ShowRoomDetails>
           }
        </div>
    );
};

export default ShowRoomsDetails;