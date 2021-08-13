import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "regenerator-runtime/runtime.js";
import * as dc from "dc";
import * as d3 from "d3";
import crossfilter from "crossfilter2";
import "dc/dist/style/dc.css";
import { print_filter, remove_empty_bins } from "./utilities";
const dayFormat = d3.timeFormat("%d");
const numFormatLg = d3.format("~s");
const numFormat = d3.format(",");
const monthName = d3.timeFormat("%B");
const monthFormat = d3.timeFormat("%m");

const sampleData = [];
window.loadDataForDCJS = function (json) {
  const data = JSON.parse(json);

  const updateObjects = (d) => {
    d.Date = new Date(d.fieldData.StatusDate);
  };
  data.forEach(updateObjects);
  const facts = crossfilter(data);

  //MARTIC BAR CHART ++++++++++++++++++++++++++
  const matricDim = facts.dimension(function (d) {
    return d.fieldData.MatricYear;
  });
  const matricGroup = matricDim.group();

  window.matricBarChart = dc.barChart("#matricYearBar");

  matricBarChart
    .dimension(matricDim)
    .group(matricGroup)
    .renderLabel(true)
    .clipPadding(100)
    .height(200)
    .x(d3.scaleBand())
    .xUnits(dc.units.ordinal)
    .colorAccessor(function (d, i) {
      return i;
    })
    .label(function (d) {
      return numFormat(d.data.value);
    })
    .ordinalColors(d3.schemeOranges[7])
    .elasticX(true)
    .elasticY(true);
  //

  //STATUS CHART +++++++++++++++++
  const statusDim = facts.dimension(function (d) {
    return d.fieldData.Status;
  });
  const statusGroup = statusDim.group();
  const statusGroupFiltered = remove_empty_bins(statusGroup);
  window.statusBarChart = dc.barChart("#statusBarChart");

  statusBarChart
    .dimension(statusDim)
    .group(statusGroupFiltered)
    .renderLabel(true)
    .clipPadding(600)
    .height(200)
    .x(d3.scaleBand())
    .xUnits(dc.units.ordinal)
    .colorAccessor(function (d, i) {
      return i;
    })
    .ordinalColors(d3.schemePurples[7])

    .elasticX(true)
    .elasticY(true);

  //RENDER ALL
  dc.renderAll();
};
