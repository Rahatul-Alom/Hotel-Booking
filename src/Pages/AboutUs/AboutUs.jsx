import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div>
        <Helmet>
          <title>Hotel Booking | About Us</title>
        </Helmet>
           <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/FVCmn4v/2319.webp" className="w-full" />
             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
         <a href="#slide4" className="text-white">❮</a> 
         <a href="#slide2" className="text-white">❯</a>
         </div>
        </div> 
            <div id="slide2" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/YDqJc5s/3442-768x461.webp" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="text-white">❮</a> 
            <a href="#slide3" className="text-white">❯</a>
        </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
             <img src="https://i.ibb.co/JkFNs8n/3964.webp" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
         <a href="#slide2" className="text-white">❮</a> 
         <a href="#slide4" className="text-white">❯</a>
        </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/m9MCZdb/1407953244000-177513283.webp" className="w-full" />
         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="text-white">❮</a> 
        <a href="#slide1" className="text-white">❯</a>
        </div>
        </div>
        </div>
            <div className='my-12 mx-auto max-w-6xl'data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600" >
                <h1 className='text-6xl font-bold text-amber-700 text-center'>About Us</h1>
                 <p className='font-semibold text-lg mt-7 text-center'>We are not just hoteliers; we are creators of unparalleled hospitality experiences. With an unwavering commitment to perfection and a meticulous focus on every detail, we elevate ordinary stays into extraordinary moments of luxury. Our mission is clear - to turn your accommodation dreams into a reality, offering a haven of opulence and personalized service. From the grandeur of our suites to the finesse in our amenities, we redefine hospitality, ensuring every stay with us is a memorable journey into refined indulgence. Welcome to a world where extraordinary hospitality meets your every desire.</p>
                <h1 className='text-4xl mt-12 font-bold text-amber-700 text-center'>Our Commitment</h1>
                <p className='font-semibold text-lg mt-7 text-center'>
                Our mission is crystal clear - to provide an unrivaled 5-star experience, where every guest is treated to the pinnacle of luxury, ensuring their stay is not just a visit but a cherished memory. Welcome to a world where every detail is meticulously curated to exceed your expectations, creating a haven of indulgence that is truly five-star in every sense.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;