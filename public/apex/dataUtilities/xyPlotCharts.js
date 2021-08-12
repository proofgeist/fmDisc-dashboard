export { configureData, parseData, configureLabels };
/**
 * Properly formats the seriesKeys into arrays for Apex Charts
 * Data EXAMPLE: { sales: 30, profit: 20, margin: 14, x: "1/1/2019" }
 * @param {array} data the data
 * @param {array} seriesKeys the keys in the data to render
 */
function configureData(data, seriesKeys, sort) {
  // data.sort((a, b) => (a[sort] > b[sort] ? 1 : -1));
  // console.log("DATA", data);

  //construct the series array by placing all the values from any keys (other than x) in each object into an array.
  const keys = seriesKeys || Object.keys(data[0]);
  let series = [];
  keys.map(function (key, i) {
    const seriesTemp = data.map(function (item) {
      return item[key];
    });
    var obj = { name: key, data: seriesTemp };

    series[i] = obj;
    return series;
  });
  console.log(series);
  return series;
}
/**
 * Formats the values of the xAxis key.
 * @param {array} data the data
 * @param {array} xAxis the key to use in the x-axis
 */
function configureLabels(data, xAxis) {
  // data.sort((a, b) => (a[xAxis] > b[xAxis] ? 1 : -1));
  return data.map(function (item) {
    return item[xAxis];
  });
}
/**
 * @param {array} data the data
 * @param {array} seriesKeys the keys in the data to render
 */
function parseData(config) {
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
