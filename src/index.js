
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  let stack = []
  
  if (Array.isArray(matrix) === true) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++){
        let columnIdx = i % 2 === 0 
        ? j
        : (matrix[i].length - j - 1);
        
        stack.push(matrix[i][columnIdx])
      }
    }
    return stack;
  } else {
    return [];
  }
}
