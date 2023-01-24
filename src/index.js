
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let result = [];
    for (let i = 1; i < matrix.length; i = i + 2) {
      matrix[i].reverse();
    }
    result = [].concat(...matrix);
    return result;
  };

