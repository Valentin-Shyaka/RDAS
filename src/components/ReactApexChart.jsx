import React, { Component } from "react";
import Chart from "react-apexcharts";

export default function ApexChart() {
       const  series=[67];
       const  options={
          chart: {
            height: 250,
            type: 'radialBar',
            offsetY: -10
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 135,
              dataLabels: {
                name: {
                  fontSize: '16px',
                  color: undefined,
                  offsetY: 120
                },
                value: {
                  offsetY: 76,
                  fontSize: '22px',
                  color: undefined,
                  formatter: function (val) {
                    return val + "%";
                  }
                }
              }
            }
          },
          fill: {
            colors:['#CFF80B'],
            opacity:0.9,
            type:'solid',
            
            gradient: {
                shade: 'dark',
                type:'horizontal',
                shadeIntensity: 0.15,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                sstops: [0, 50, 100],
                colorStops: []
            },
          
          },
          stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0,
          },
          labels: ['Km/H'],
        };

  

return(
    <div id="chart">
        <Chart options={options} series={series} type="radialBar" height={350} />
    </div>
      );
    
}