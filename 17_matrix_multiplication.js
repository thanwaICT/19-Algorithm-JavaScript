// การคูณเมทริกซ์

function matrixMultiply(A, B) {
  // Create a result matrix with the appropriate dimensions
  const result = Array.from({ length: A.length }, () => Array(B[0].length).fill(0));

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B[0].length; j++) {
      for (let k = 0; k < B.length; k++) {
        result[i][j] += A[i][k] * B[k][j]; // Multiply and accumulate the sum
      }
    }
  }

  return result; // Return the resulting matrix
}

//

const A = [
  [1, 2, 3],
  [4, 5, 6]
];

const B = [
  [7, 8],
  [9, 10],
  [11, 12]
];

const result = matrixMultiply(A, B);
console.log("Resulting Matrix:", result);

// result = [ [ 58, 64 ], [ 139, 154 ] ]
// 58 = 7*1 + 9*2 + 11*3
// 64 = 8*1 + 10*2 + 12*3
// 139 = 7*4 + 9*5 + 11*6
// 154 = 8*4 + 10*5 + 12*6
