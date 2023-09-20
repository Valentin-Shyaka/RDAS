import React from "react";
import '../App.css'
import ReactSpeedometer from "react-d3-speedometer";


import { useState } from "react";

const Gauge =()=>{

   const value=60

  

 
    return (
      
                <ReactSpeedometer
                  maxValue={120}
                  ringWidth={20}
                  customSegmentStops={[
                    0,
                    12,
                    24,
                    36,
                    48,
                    60,
                    72,
                    84,
                    96,
                    108,
                    120
                  ]}
                  segmentColors={[
                    "#bf616a",
                    "#d08770",
                    "#ebcb8b",
                    "#a3be8c",
                    "#b48ead",
                  ]}
                  needleTransitionDuration={9000}
                  needleTransition="easeElastic"
                  currentValueText={`${value} km/H`}
                  value={value}
                  className="speedometer"
                />
             
    );
  
}

export default Gauge;

