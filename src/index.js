
// You should implement your task here.

module.exports = function towelSort (matrix) {
let arr = [];
if(Array.isArray(matrix)){
  matrix.forEach((element, index) => {
    Array.prototype.push.apply(arr, index % 2 === 0 ? element : element.reverse());
  });
}
  return arr;
}
