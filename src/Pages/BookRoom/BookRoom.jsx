import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const BookRoom = () => {
    const rooms = useLoaderData()
    const {_id, room_title, price_per_night, image} = rooms;
    const {user} = useContext(AuthContext)

    const hadleBooking = event =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const date = form.date.value;
      const email = user?.email;
      const image = form.image.value;
      
      const booking ={
          CastomarName: name,
          email, 
          price_per_night,
          date,
          image,
          room: room_title,
          room_id: _id,
      }
      console.log(booking)

      fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: "Good job!",
              text: "Room Booked Successfull!",
              icon: "success"
            });
          }
        })
}

    return (
        <div>
        <h2 className="text-center font-bold mt-5 text-5xl">{room_title} </h2>
        <form onSubmit={hadleBooking} className="px-4">
          <div className="mx-auto max-w-2xl">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Ammount</span>
            </label>
            <input
              type="text"
              defaultValue={'$'+price_per_night}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Room Image</span>
            </label>
            <input
              type="text"
              name="image"
              defaultValue={image}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input className="btn bg-[#aa825d] text-white font-semibold" type="submit" value="Book Now" />
          </div>
          </div>
        </form>
      </div>
    );
};

export default BookRoom;