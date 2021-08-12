export {
  configureForPie,
  configureLabelsForPie,
  configureForXYPlots,
  configureXAxisValues,
  configureForRangeBar,
  parseDataForBar,
  parseDataForPie,
  parseDataForRange,
  parseDataForHeat,
};

function configureForRangeBar(d) {
  const series = [];

  d.map(function (top) {
    const name = top.name;
    const ar = top.data;
    const data = ar.map(function (item) {
      var start = item.start;
      var end = item.end;
      var startDate = new Date(start).getTime();
      var endDate = new Date(end).getTime();
      var obj = { x: item.x, y: [startDate, endDate] };
      return obj;
    });
    const newObj = { name, data };
    series.push(newObj);
    return series;
  });

  return series;
}
/**
 * @param {array} data the data
 * @param {array} seriesKeys the keys in the data to render
 * @param {string} seriesType the type of series for this chart: "bar" or "line" or "";
 */
function configureForXYPlots(data, seriesKeys) {
  //construct the series array by placing all the values from any keys (other than x) in each object into an array.
  let series = [];
  seriesKeys.map(function (key, i) {
    const seriesTemp = data.map(function (item) {
      return item[key];
    });
    var obj = { name: key, data: seriesTemp };

    series[i] = obj;
    return series;
  });

  return series;
}

function configureForPie(data) {
  const keys = Object.keys(data[0]);
  //remove the 'x' key
  const seriesKeys = keys.filter((property) => property !== "x");

  //construct the series array by placing all the values from any keys (other than x) in each object into an array.
  const series = [];

  seriesKeys.map(function (key, i) {
    const seriesTemp = data.reduce(function (a, b, i) {
      var it = b[key];
      var sum = a + it;
      return it + a;
    }, 0);

    series[i] = seriesTemp;
    return series;
  });

  return series;
}

function configureLabelsForPie(data) {
  const keys = Object.keys(data[0]);
  //remove the 'x' key
  const seriesKeys = keys.filter((property) => property !== "x");

  //construct the series array by placing all the values from any keys (other than x) in each object into an array.
  const labels = seriesKeys.map(function (key, i) {
    return key;
  });

  return labels;
}

function configureXAxisValues(data, xAxis) {
  return data.map(function (item) {
    return item[xAxis];
  });
}

function parseDataForBar(config) {
  console.log(config);
  const dpi = config.dataPointIndex;
  const si = config.seriesIndex;

  const seriesName = config.w.config.series[si].name;
  const value = config.w.config.series[si].data[dpi];
  const categoryName = config.w.config.xaxis.categories[dpi];

  const obj = {
    series: seriesName,
    category: categoryName,
    value: value,
  };

  return obj;
}
function parseDataForRange(config) {
  const dpi = config.dataPointIndex;
  const si =
    config.w.config.chart.type === "bar"
      ? config.seriesIndex
      : config.dataPointIndex;
  const seriesName =
    config.w.config.chart.type === "bar"
      ? config.w.config.series[si].name
      : config.w.config.labels[si];
  const value =
    config.w.config.chart.type === "bar"
      ? config.w.config.series[si].data[dpi]
      : config.w.config.series[si];
  const categoryName = config.w.config.xaxis.categories[dpi];

  const obj = {
    series: seriesName,
    category: categoryName,
    value: value,
  };
  console.log(obj);
  var newObj = JSON.stringify(obj);
  console.log(newObj);
  return newObj;
}
function parseDataForPie(config) {
  const dpi = config.dataPointIndex;
  const si = config.dataPointIndex;
  const seriesName = config.w.config.labels[si];
  const value = config.w.config.series[si];
  const categoryName = config.w.config.xaxis.categories[dpi];

  const obj = {
    series: seriesName,
    category: categoryName,
    value: value,
  };
  console.log(obj);

  return obj;
}
function parseDataForHeat(config) {
  const dpi = config.dataPointIndex;
  const si =
    config.w.config.chart.type === "bar"
      ? config.seriesIndex
      : config.dataPointIndex;
  const seriesName =
    config.w.config.chart.type === "bar"
      ? config.w.config.series[si].name
      : config.w.config.labels[si];
  const value =
    config.w.config.chart.type === "bar"
      ? config.w.config.series[si].data[dpi]
      : config.w.config.series[si];
  const categoryName = config.w.config.xaxis.categories[dpi];

  const obj = {
    series: seriesName,
    category: categoryName,
    value: value,
  };
  console.log(obj);
  var newObj = JSON.stringify(obj);
  console.log(newObj);
  return newObj;
}
