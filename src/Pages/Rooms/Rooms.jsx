import { useLoaderData } from "react-router-dom";
import ShowRooms from "./ShowRooms";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Rooms = () => {

  const axios = useAxiosSecure();
  const getRooms = async ()=>{
    const res = await  axios.get('/rooms');
    return res;
  }

  const {
    data: rooms, 
    isLoading, 
    isError,
    error} = useQuery({
    queryKey: ['rooms'],
    queryFn: getRooms,

  })
  console.log(rooms)

  if(isLoading){
    return <p>Loading...</p>
  }

  if(isError){
    return <p>something is erroe: {error}</p>
  }
  
  return (
    <div className="mx-auto max-w-7xl ">
      <div className="mt-20">
        <h1 className="font-bold my-4 text-xl">Filter with price range</h1>
        <select selected defaultValue={ 'Select Price'} className="select select-bordered w-full max-w-xs">
        {/* onChange={(e) => setSelectedPrice(e.target.value)} */}
          <option disabled>
            Select Price
          </option>
          <option >$0-$100</option>
          <option >$100-$200</option>
          <option >$200-$300</option>
          <option>$300-$500</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-9 mt-20">
        {rooms?.data?.map((room) => (
          <ShowRooms key={room._id} rooms={room}></ShowRooms>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
