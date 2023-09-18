const CarDetails = () => {
  return (
    <div className="flex flex-wrap bg-black min-h-screen items-center justify-center w-screen gap-4 lg:gap-10 p-4">
      <div className="flex flex-col border-[3px] rounded-lg items-center p-4 gap-4">
        <span className="text-3xl font-semibold">Reach Out</span>
        <span className="text-[#CFF80B] text-lg">Your Space</span>
        <div className=" w-[400px] h-[380px]">
          <img src="./car.png" alt="h-auto w-full" />
        </div>
        <div className="flex flex-col w-[23rem] items-center justify-center bg-[#1d6d9b42] p-6 rounded-lg gap-4">
          <span>Premium and prestige car needs proper care</span>
          <span>Experience the thrill and satisfaction to drive.</span>
        </div>
        <button className="bg-[#CFF80B] font-semibold w-[23rem] h-[3.3rem] rounded-md">
          LET'S GO
        </button>
      </div>
      <div className="flex flex-col border-[3px] rounded-lg items-center p-4 gap-4">
        <div className="w-[400px] h-[36rem] bg-[#1d1d1c] rounded-lg">
          <img src="./car.png" alt="" />
        </div>
        <div className="flex p-4 gap-4">
          <div className="bg-[#1d6d9b15] rounded-md flex flex-col p-4 justify-center gap-4">
            <span>Total Distance</span>
            <span>40,000 Km</span>
          </div>
          <div className="bg-[#1d6d9b15] rounded-md flex flex-col p-4 justify-center gap-4">
            <span>Tyre Pressure</span>
            <span>Type 1</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 p-4 border-[3px] rounded-lg">
        <div className="flex flex-col items-center">
          <div className="w-[400px] h-[60%]">
            <img src="./car.png" alt="" />
          </div>
          <div className="flex p-4 gap-4">
            <div className="bg-[#1d6d9b42] rounded-md flex flex-col p-4 justify-center gap-4">
              <span>Diesel</span>
              <span>40,000 Km</span>
            </div>
            <div className="bg-[#1d6d9b42] rounded-md flex flex-col p-4 justify-center gap-4">
              <span>Cool Seat</span>
              <span>Temp Control On Seat</span>
            </div>
          </div>
          <button className="bg-[#CFF80B] font-semibold w-[23rem] h-[3.3rem] rounded-md">
            REVIEW NOW
          </button>
        </div>
        <div className="w-[365px] h-[15rem] bg-slate-500 rounded-md">
          <img
            src="./gps.jpg"
            alt=""
            className="object-cover max-h-[15rem] w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
