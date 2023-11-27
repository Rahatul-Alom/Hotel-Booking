import ShowRooms from "./ShowRooms";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const prices = [
  '$0-$100',
  '$100-$200',
  '$200-$300',
  '$300-$500'
]

const Rooms = () => {
  const [price, setPrice] = useState('')  
  console.log(price)

  const axios = useAxiosSecure();
  useEffect(()=>{
    Aos.init();
},[])

  const getRooms = async ()=>{
    const res = await  axios.get(`/rooms?price=${price}`);
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
        <select selected defaultValue={ 'Select Price'} className="select select-bordered w-full max-w-xs" 
          onChange={(e) => setPrice(e.target.value)}

        >
          <option disabled>Select Price</option>
          {
            prices.map((price)=>(
              <option key={price} value={price}>{price}</option>
            ))  
          }
        </select>
      </div>
      <div className="grid grid-cols-3 gap-9 mt-20"data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500">
        {rooms?.data?.map((room) => (
          <ShowRooms key={room._id} rooms={room}></ShowRooms>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
