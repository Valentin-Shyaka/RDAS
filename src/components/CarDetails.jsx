import '../App.css'

const CarDetails = () => {
  return (
    <div className="flex flex-wrap bg-inherit  items-center justify-center w-full gap-4 lg:gap-6 p-4 text-sm">
      <div className="flex flex-col border-[3px] rounded-lg items-center py-[3rem] p-4 gap-5">
        <span className="text-3xl font-semibold">Reach Out</span>
        <span className="text-[#CFF80B] text-lg">Your Space</span>
        <div className=" w-[15rem] h-[10rem]">
          <img src="./car.png" alt="h-auto w-full" />
        </div>
        <div className="flex flex-col w-[22rem] items-center justify-center bg-[#1d6d9b42] p-6 rounded-lg gap-4">
          <span>Premium and prestige car needs proper care</span>
          <span>Experience the thrill and satisfaction to drive.</span>
        </div>
        <button className="bg-[#CFF80B] font-semibold w-[15rem] h-[3.3rem] rounded-md">
          LET'S GO
        </button>
      </div>
      <div className="flex flex-col border-[3px] rounded-lg items-center p-4 py-[2rem] gap-5 md:hidden lg:flex">
        <div className="w-[20rem] h-[22rem] bg-[#1d1d1c] rounded-lg">
          <img src="./car.png" alt="" />
        </div>
        <div className="flex p-4 gap-2">
          <div className="bg-[#1d6d9b42] rounded-md flex flex-col p-4 justify-center gap-4">
            <span>Total Distance</span>
            <span>40,000 Km</span>
            <span className="text-[#a7c706] text-sm font-semibold">Check Details</span>
          </div>
          <div className="bg-[#1d6d9b42] rounded-md flex flex-col py-2 px-8 justify-center gap-3">
            <span>Tyre Pressure</span>
            <span>Type 1</span>
            <span className="text-[#a7c706] text-sm font-semibold">Check Details</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 py-[2rem] px-8 border-[4px] rounded-lg">
        <div className="flex flex-col items-center">
          <div className="w-[15rem] h-[60%]">
            <img src="./car.png" alt="" />
          </div>
          <div className="flex w-full p-4 gap-2">
            <div className="bg-[#1d6d9b42] rounded-md flex flex-col p-4 px-5 justify-center gap-4">
              <span>Diesel</span>
              <span>40,000 Km</span>
            </div>
            <div className="bg-[#1d6d9b42] rounded-md flex flex-col p-4 justify-center gap-4">
              <span>Cool Seat</span>
              <span>Control On Seat</span>
            </div>
          </div>
          <button className="bg-[#CFF80B] font-semibold w-full h-[3.3rem] rounded-md">
            REVIEW NOW
          </button>
        </div>
        <div className="w-full h-[10rem] bg-slate-500 rounded-md">
          <img
            src="./gps.jpg"
            alt=""
            className="object-cover max-h-[10rem] w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
