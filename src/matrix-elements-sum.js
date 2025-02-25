// matrix-elements-sum.js

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    let totalSum = 0;

    if (matrix.length > 0) {
        for (let j = 0; j < matrix[0].length; ++j) {
            let columnSum = 0;
            let zero = false;
            for (let i = 0; i < matrix.length; ++i) {
                if (!zero) {
                    zero = matrix[i][j] === 0;
                    columnSum += matrix[i][j];
                }
            }
            totalSum += columnSum;
        }
    }

    return totalSum;
}

module.exports = {
    getMatrixElementsSum,
};

//__EOF__
