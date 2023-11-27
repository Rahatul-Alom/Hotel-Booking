import { Helmet } from "react-helmet-async";

const ContuctUs = () => {
    return (
        <div>
        <Helmet>
          <title>Hotel Booking | Contact Us</title>
        </Helmet>
             <h1 className='mt-9 text-7xl text-center text-amber-700 font-bold'>Contact Us</h1>

            <div className='flex flex-col md:flex-col lg:flex-row justify-center items-center my-12 mx-auto max-w-6xl'>
            <iframe
            width="100%"
             height="500"
             src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Long%20Beach%20Hotel%20Cox's%20Bazar+(5%20Star%20Hotel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
        <a href="https://www.maps.ie/population/">Find Population on Map</a>
      </iframe>
        <div className="hero min-h-screen">
        <div className="hero-content ">
        <div className="text-center">
        </div>
        <div className="card w-96 shadow-2xl bg-base-100">
            <form className="card-body">
            <div className="">
                <label className="label">
                <span className="label-text">Name</span>
                </label>
                <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-80"
                required
                />
            </div>
            <div className="">
                <label className="label">
                <span className="label-text">Email</span>
                </label>
                <input
                type="Email"
                placeholder="Your Email"
                className="input input-bordered w-80"
                required
                />
            </div>
            <div className="">
                <label className="label">
                <span className="label-text">Subject</span>
                </label>
                <input
                type="text"
                placeholder="Subjet"
                className="input input-bordered w-80"
                required
                />
            </div>
            <div className="">
                <label className="label">
                <span className="label-text">Your Message</span>
                </label>
                <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
            </div>
            <div className="form-control mt-6">
                <button className="btn bg-amber-600 text-white font-semibold">Send Message</button>
            </div>
            </form>
        </div>
        </div>
        </div>
            </div>
        </div>
    );
};

export default ContuctUs;