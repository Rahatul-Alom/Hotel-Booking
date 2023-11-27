import { FaStar } from "react-icons/fa";

const ShowReview = ({ reviews }) => {
  const { Userphoto, CastomarName, review, rating} = reviews ||{};
  const starArray = Array.from({ length: 5 }, (_, index) => (
    <FaStar size={25} key={index} color={index < rating ? "gold" : "gray"} />
  ));
  return (
    <div>
      <div className="card p-9 bg-base-100 shadow-xl">
            <img className="rounded-full h-32 w-32" src={Userphoto} /> 
            <h2 className="card-title mt-5">{CastomarName}</h2>
            <p className="flex mt-5">{starArray}</p>
             <p className="mt-7 text-justify"> {review}</p>
      </div>
    </div>
  );
};

export default ShowReview;
