import {MdLocalOffer} from 'react-icons/md'; 
const SpecialOffer = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center pt-24">Special Offer!!</h1>
      <div className="hero pt-9">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/ZL413fB/3442-768x461.webp"
            className="w-full rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              25% off family bookings in December
            </h1>
            <p className="py-6 leading-relaxed">
              <b>Discount Rate:</b> 25% off the standard room rates. <br />
              <b>Eligibility:</b>Applicable to family bookings (defined as two or more adults and
              at least one child) during the month of December. <br />
              <b>How to Redeem:</b> Use code: DEC25FAMILY during the booking process.
              Select a room and choose your dates within the specified period.
              The discount will be applied automatically at checkout.
            </p>
            <button className="btn bg-amber-700 text-white font-semibold">
            <MdLocalOffer></MdLocalOffer> View Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
