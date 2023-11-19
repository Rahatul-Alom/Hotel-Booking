import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ShowMybookings from "./ShowMybookings";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure()
  console.log(bookings)
  const url = `/bookings?email=${user?.email}`;

  useEffect(() => {
      axiosSecure.get(url)
        .then(res=> setBookings(res.data))
  }, [url, axiosSecure]);
  return (
    <div className="grid-cols-1 space-y-12">
      {
        bookings.map(booking => <ShowMybookings key={booking._id} booking={booking}></ShowMybookings>)
      }

    </div>
  );
};

export default MyBooking;
