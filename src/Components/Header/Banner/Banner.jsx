import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {
  useEffect(()=>{
    Aos.init();
},[])
  return (
    <div>
      <div className="bg-cover  bg-center min-h-screen"
        style={{ backgroundImage: "url(https://i.ibb.co/Zdn6v6v/3964.webp)" }}
      >
        <div className="min-h-screen bg-black bg-opacity-50">
          <div className="pl-9 pt-9 lg:pt-32" data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="500">
            <h1 className=" text-3xl md:text-5xl lg:text-7xl text-white  font-bold"
            >
             Luxury Service <br /> 
            </h1>
            <h1 className=" text-3xl md:text-5xl lg:text-7xl text-white  font-bold mt-5">Apartments</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
