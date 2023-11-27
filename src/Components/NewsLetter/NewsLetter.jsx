import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

import {AiOutlineCalendar} from 'react-icons/ai'; 

const NewsLetter = () => {
  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div className=" my-28 mx-auto max-w-7xl"data-aos="zoom-in" data-aos-delay="100" data-aos-duration="600" data-aos-easing="ease-in-sine">
      <h1 className="text-6xl font-bold text-center pb-12">Latest News</h1>  
        <div className='flex flex-col lg:flex-row gap-7 items-center'>
        <div className="w-96 bg-base-100 shadow-xl h-96">
        <figure>
         <img className='h-50' src="https://i.ibb.co/6mbQz7b/20-6-1000x700.jpg"  alt="loading"/>
        </figure>
        <div className="card-body">
            <div className="badge badge-secondary">Leatest</div>
          <p>Celebrating 20th Anniversary Of Hotel!</p>
          <p className='flex items-center text-amber-700'><AiOutlineCalendar className='text-xl mr-2 '></AiOutlineCalendar> 11 November, 2023</p>
        </div>
      </div>
      <div className="w-96 bg-base-100 shadow-xl h-96">
        <figure>
         <img className='h-52 w-full' src="https://i.ibb.co/Zdn6v6v/3964.webp"  alt="loading"/>
        </figure>
        <div className="card-body">
            <div className="badge badge-accent">Updated</div>
          <p>Our Dhaka Hotel Has Been Newly Renovated!</p>
          <p className='flex items-center text-amber-700'><AiOutlineCalendar className='text-xl mr-2 '></AiOutlineCalendar> 19 November, 2023</p>
        </div>
      </div>
      <div className="w-96 bg-base-100 shadow-xl h-96">
        <figure>
         <img className='h-50'  src="https://i.ibb.co/R4yvxr2/21-6-1000x700.jpg"  alt="loading"/>
        </figure>
        <div className="card-body">
            <div className="badge badge-secondary">Leatest</div>
          <p>All Rooms Now Equipped With High Speed Wifi</p>
          <p className='flex items-center text-amber-700'><AiOutlineCalendar className='text-xl mr-2 '></AiOutlineCalendar> 21 November, 2023</p>
        </div>
      </div>
      <div className="w-96 bg-base-100 shadow-xl h-96">
        <figure>
         <img className='h-52 w-full'  src="https://i.ibb.co/khpzK1Y/1407953244000-177513283.webp"  alt="loading"/>
        </figure>
        <div className="card-body">
            <div className="badge badge-secondary">Leatest</div>
          <p>Our New Soho Hotel Miami Beach Branch Is Open!</p>
          <p className='flex items-center text-amber-700'><AiOutlineCalendar className='text-xl mr-2 '></AiOutlineCalendar> 15 November, 2023</p>
        </div>
      </div>
        </div>
    </div>
  );
};

export default NewsLetter;
