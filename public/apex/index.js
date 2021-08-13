import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "regenerator-runtime/runtime.js";
import ApexCharts from "apexcharts";
import {
  configureData as dataXY,
  configureLabels as labelsXY,
  parseData as parseXY,
} from "./dataUtilities/xyPlotCharts";

var data = [];

var options = {
  title: { text: "dfg" },
  chart: {
    type: "bar",
  },
  series: [
    {
      name: "sales",
      data: [35, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
