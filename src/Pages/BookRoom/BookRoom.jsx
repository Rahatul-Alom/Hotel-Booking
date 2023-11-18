import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const BookService = () => {
    const rooms = useLoaderData()
    const {_id, room_title} = rooms;
    const {user} = useContext(AuthContext)

    return (
        <div>
        <h2 className="text-center font-bold mt-5 text-5xl">{room_title} </h2>
        <form  className="px-4">
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
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
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

export default BookService;