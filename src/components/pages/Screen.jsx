import React from "react";
import NavHeader from "../NavHeader";
import Sidebar from "../Sidebar";
import ReactSpeedometer from "../ReactSpeedometer";
import Gauge from "../ReactSpeedometer";

const Screen = () => {
  return (
    <div className="p-8 gap-4 flex flex-col h-full">
      <NavHeader title={"Screen"} />
      <div className="flex items-center w-full h-[75vh] gap-20">
        <Sidebar />
        <div className="w-full relative overflow-hidden">
          <iframe
            width="420"
            height="315"
            src="http://192.168.8.106:8000/stream"
            title="camera_video"
            className="w-full h-[60vh] rounded-xl overflow-hidden"
          ></iframe>
          <Gauge className="speedometer" />
          <div className=" flex  p-2 w-full bg-[#1E1E1E] mt-2 rounded-xl justify-center gap-6">
            <div className="flex flex-col  w-[15rem] gap-2 p-2 bg-[#CFF80B] cursor-pointer rounded-md justify-center">
              <p className="text-sm">
                You are close to the obstacle{" "}
                <span className="text-sm">10 Metres</span>
              </p>
            </div>
            <div className="flex  w-[15rem] gap-2 p-2 bg-red-500 cursor-pointer items-center rounded-md justify-center">
              <p className="text-2xl font-bold">STOP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
