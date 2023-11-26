import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";
import "../../App.css";

const ReviewRoom = () => {
  const rooms = useLoaderData();
  console.log(rooms)
  const { _id, room_title , price } = rooms;
  const { user } = useContext(AuthContext);
  const [selectedRating, setSelectedRating] = useState(0);

  const hadleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const roomTitle = user?.room_title;
    const review = form.review.value;

    const roomReview = {
      roomID:_id,
      room_title,
      price,
      CastomarName: name,
      email,
      review,
      rating: selectedRating,
    };
    console.log(roomReview);

    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(roomReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Review and rating Successfull!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      <form onSubmit={hadleReview} className="px-4">
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
              <span className="label-text">Room Name</span>
            </label>
            <input
              type="text"
              placeholder="Room Name"
              name="roomTitle"
              defaultValue={room_title}
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
              <span className="label-text">Rating</span>
            </label>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((ratingValue) => (
                <label key={ratingValue} className="rating-input-label">
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    checked={ratingValue === selectedRating}
                    onChange={() => setSelectedRating(ratingValue)}
                  />
                  <FaStar
                    size={25}
                    color={ratingValue <= selectedRating ? "#FFBF00" : "black"}
                  ></FaStar>
                </label>
              ))}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Review</span>
            </label>
            <textarea
              className="border-2 p-3 rounded-lg"
              placeholder="Your Review"
              name="review"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-amber-700 text-white font-semibold"
              type="submit"
              value="Submit Your Review"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewRoom;
