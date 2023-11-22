import { useLoaderData, useParams } from "react-router-dom";
import ShowRoomDetails from "./ShowRoomDetails";
import { useEffect, useState } from "react";

const ShowRoomsDetails = () => {
    const [details, setDetails] = useState([])
    const {_id} = useParams()


    const roomDetails = useLoaderData();

    useEffect(()=>{
        const seeRoomDetails = roomDetails.find((detail) => detail._id === _id);
        setDetails(seeRoomDetails);
    },[_id,roomDetails])

   
    return (
        <div>
           {
             <ShowRoomDetails details={details}></ShowRoomDetails>
           }
        </div>
    );
};

export default ShowRoomsDetails;