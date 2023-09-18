import React, { Component } from "react";
import Chart from "react-apexcharts";

export default function ApexChart() {
       const  series=[67];
       const  options={
          chart: {
            height: 350,
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
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            },
            fill: {
                colors: ['#1A73E8', '#B32824']
              }
          },
          stroke: {
            dashArray: 4
          },
          labels: ['Km/H'],
        };

  

return(
    <div id="chart">
        <Chart options={options} series={series} type="radialBar" height={350} />
    </div>
      );
    
}