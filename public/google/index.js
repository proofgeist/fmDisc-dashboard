import "./style.css";
import "regenerator-runtime/runtime.js";
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

const array = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Sleep", 2],
  ["Play", 7],
];
const keys = ["Status", "Sum"];

function drawChart() {
  var data = google.visualization.arrayToDataTable(array);
  var options = {
    title: "My Daily Activities",
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("chart")
  );
  chart.draw(data, options);
}
