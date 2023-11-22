import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ShowMybookings from "./ShowMybookings";
import Swal from "sweetalert2";

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

  const handleDelete = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{ console.log(data);
          if(data.deletedCount > 0){
            Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire(
                  'Deleted!',
                  'Your product has been deleted fom your cart.',
                  'success'
                )   
                const remainig = bookings.filter(booking => booking._id !== id)
                setBookings(remainig)            
              }

            })
          }
        })
  }

  
  const handleUpdateDate = (event, id) =>{
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const updated = {date}
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: 'PATCH',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(updated)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
           // update state
           const remainig = bookings.filter(booking => booking._id !== id);
           const updated = bookings.find(booking => booking._id === id);
           updated.date = date;
           const newBookings = [updated, ...remainig]
           setBookings(newBookings)
          Swal.fire({
            title: 'Success!',
            text: 'Booking Date Updated successfully',
            icon: 'success',
            confirmButtonText: 'Go Back'
          })
        }
        
      })

  }


  return (
    <div className="grid-cols-1 space-y-12">
      {
        bookings.map(booking => <ShowMybookings key={booking._id} booking={booking} handleDelete ={handleDelete} handleUpdateDate ={handleUpdateDate}></ShowMybookings>)
      }

    </div>
  );
};

export default MyBooking;
