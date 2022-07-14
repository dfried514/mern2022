// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
    * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
    *    a square matrix (rows and columns).
    * @returns {number} Represents the absolute difference between the top left to
    *    bottom right diagonal and the top right to bottom left diagonal.
    * Math.abs()
*/
const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
*/
const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
*/
function diagonalDifference(sqrMatrix) {
    // initialize diagonal sums
    let diag1 = 0;
    let diag2 = 0;

    for (let i = 0; i < sqrMatrix.length; i++) {
        // diag1:  add element on topLeft to bottomRight diagonal
        diag1 += sqrMatrix[i][i];
        // diag2:  add element on topRight to bottomLeft diagonal
        diag2 += sqrMatrix[i][sqrMatrix.length - i - 1];
    }
    // return absolute difference of diagonal sums
    return Math.abs(diag1 - diag2);
}

console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));

