import { MdOutlineUpdate } from "react-icons/md";

const ShowMybookings = ({ booking }) => {
  const { CastomarName, price_per_night, room, date, image } = booking;
  console.log(booking)

  return (
    <div className="mx-auto max-w-6xl mt-9">
      <div className="card lg:h-72 lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="lg:h-72" src={image} alt="Album"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Room Name: {room}</h2>
          <p className="text-lg mt-2"><b>Price Per Night: </b>${price_per_night}</p>
          <p className="text-lg mt-"><b>Booked Date: </b>{date}</p>
          <button className="btn w-36 bg-green-500 text-white font-semibold">Add Reveiw</button>
          <div className="card-actions justify-end">
            <button className="btn bg-[#aa825d] text-white font-semibold"><MdOutlineUpdate className="text-xl" />
              Update Date</button>
            <button className="btn bg-red-600 text-white font-semibold">Delet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMybookings;
