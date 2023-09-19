import React from "react";
import NavHeader from "../NavHeader";
import Sidebar from "../Sidebar";

const Screen = () => {
  return (
    <div className="p-8 gap-4 flex flex-col">
      <NavHeader title={"Screen"} />
      <div className="flex items-center w-full h-[80vh] gap-20">
        <Sidebar />
        <div className="w-full">
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/M6Izjs3U8D8?autoplay=1&mute=1"
            title="camera_video"
            className="w-full h-[60vh] rounded-xl"
          ></iframe>
          <div className=" flex  p-6 w-full bg-[#1E1E1E] mt-6 rounded-xl justify-center gap-6">
            <div className="flex flex-col h-4/5 w-[15rem] gap-2 p-4 bg-orange-500 cursor-pointer rounded-md justify-center">
              <p className="text-sm">You are close to the obstacle <span className="text-sm">10 Metres</span></p>
              
            </div>
            <div className="flex h-4/5 w-[15rem] gap-2 p-4 bg-red-500 cursor-pointer items-center rounded-md justify-center">
              <p className="text-2xl font-bold">STOP</p>
            </div>
            <div className="flex flex-col h-4/5 w-[15rem] gap-2 p-4 px-8 bg-green-500 cursor-pointer rounded-md justify-center">
              <p className="text-sm">Speed</p>
              <p className="text-sm">45km/hr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
