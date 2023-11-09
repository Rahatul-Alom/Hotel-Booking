const Banner = () => {
  return (
    <div>
      <div className="bg-cover  bg-center min-h-screen"
        style={{ backgroundImage: "url(https://i.ibb.co/JnL6F9b/34-6.jpg)" }}
      >
        <div className="min-h-screen bg-black bg-opacity-30">
          <div className="pl-9 pt-9 lg:pt-36">
            <h1 className=" text-3xl md:text-5xl lg:text-7xl text-white  font-bold">
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
