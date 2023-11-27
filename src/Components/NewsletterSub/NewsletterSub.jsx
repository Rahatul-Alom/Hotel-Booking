import { IoNewspaper } from "react-icons/io5";
const NewsletterSub = () => {
    return (
        <div className="mt-40">
        <div className="hero min-h-16">
            <div className="hero-overlay bg-amber-600 bg-opacity-80"></div>
            <div className=" p-10 text-center" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="700" data-aos-anchor-placement="top-bottom">        
                <div className="flex items-center leading-relaxed mb-5 text-2xl md:text-4xl lg:text-5xl text-white font-bold">
                     <IoNewspaper className=" text-5xl mr-5"/>
                    <h1>Subscribe to our newsletter  </h1>
                </div>
                <div className="flex justify-center flex-row items-center mt-7 relative w-full">
                    <input type="text" placeholder="Your Email"className="rounded-l-lg p-4  w-full max-w-xs"/>
                    <button type="submit" className="bg-amber-600 hover:bg-amber-300 text-white p-4 rounded-r-lg font-bold h-full" id="apply-btn" disabled>Subscribe</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default NewsletterSub;