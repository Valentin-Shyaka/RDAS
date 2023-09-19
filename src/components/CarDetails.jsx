import { useNavigate } from 'react-router-dom';
import '../App.css'

const CarDetails = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-wrap bg-black min-h-screen items-center justify-center w-screen gap-4 lg:gap-10 p-4">
      <div className="flex flex-col border-[4px] rounded-lg border-[#3a4861] items-center p-4 gap-4">
        <span className="text-3xl text-center lg:text-4xl font-semibold">
          Reach Out
        </span>
        <span className="text-[#CFF80B] text-lg">Your Space</span>
        <div className=" w-[400px] h-[380px]">
          <img src="./car.png" alt="h-auto w-full" />
        </div>
        <div className="flex flex-col w-[23rem] items-center justify-center bg-[#1d6d9b42] p-6 rounded-lg gap-4">
          <span>Premium and prestige car needs proper care</span>
          <span>Experience the thrill and satisfaction to drive.</span>
        </div>
        <button className="bg-[#a7c706] font-semibold w-[23rem] h-[3.3rem] rounded-md" onClick={() => navigate('/screen')}>
          LET'S GO
        </button>
      </div>
      <div className="flex border-[#3a4861] flex-col border-[4px] rounded-lg items-center p-4 gap-4">
        <div className="w-[400px] h-[36rem] second-div rounded-lg">
          <img src="./car.png" alt="" />
        </div>
        <div className="flex p-4 gap-4">
          <div className="bg-[#1d6d9b42] rounded-md flex flex-col px-8 py-2 justify-center gap-3">
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
      <div className="flex flex-col items-center border-[#3a4861] gap-2 p-4 border-[4px] rounded-lg">
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
          <button className="bg-[#a7c706] font-semibold w-[23rem] h-[3.3rem] rounded-md">
            REVIEW NOW
          </button>
        </div>
        <div className="w-[365px] h-[15rem] bg-slate-500 rounded-md cursor-pointer">
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
