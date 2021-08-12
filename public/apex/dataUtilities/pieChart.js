export { configureData, configureLabels, parseData };
/**
 * @param {array} data the data
 * @param {array} seriesKeys the keys in the data to render
 */
function configureData(data, seriesKeys) {
  const keys = seriesKeys || Object.keys(data[0]);
  //remove the 'x' key

  //construct the series array by placing all the values from any keys (other than x) in each object into an array.
  const series = [];

  keys.map(function (key, i) {
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
/**
 * collects the data keys as labels.
 * @param {array} data the data
 */
function configureLabels(data) {
  const keys = Object.keys(data[0]);
  //remove the 'x' key
  const seriesKeys = keys.filter((property) => property !== "x");

  //construct the series array by placing all the values from any keys (other than x) in each object into an array.
  const labels = seriesKeys.map(function (key, i) {
    return key;
  });

  return labels;
}
/**
 * @param {array} data the data
 * @param {array} seriesKeys the keys in the data to render
 */
function parseData(config) {
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
