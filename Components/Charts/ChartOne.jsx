"use client";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#7F56D9", "#230555"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "area",
    height: "150", // Use '100%' for dynamic height
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },

  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  // markers: {
  //   size: 4,
  //   colors: "#fff",
  //   strokeColors: ["#3056D3", "#80CAEE"],
  //   strokeWidth: 3,
  //   strokeOpacity: 0.9,
  //   strokeDashArray: 0,
  //   fillOpacity: 1,
  //   discrete: [],
  //   hover: {
  //     size: undefined,
  //     sizeOffset: 5,
  //   },
  // },
  xaxis: {
    type: "category",
    categories: ["Jan", "Mar", "May", "Jul", "Sep", "Nov", "Dec"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 100,
  },
};

const ChartOne = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Product One",
        data: [23, 11, 22, 27, 13, 22, 37],
      },
      {
        name: "Product Two",
        data: [30, 25, 36, 30, 45, 35, 64],
      },
    ],
  });

  return (
    <div className="col-span-12 rounded-md border border-stroke bg-white pt-2 px-1 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-46">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Sleep Efficiency</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
              Day
            </button>
            <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
              Week
            </button>
            <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
              Month
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height="180" // Set this to 100% to make the chart responsive to the container
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
