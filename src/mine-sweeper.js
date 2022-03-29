const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    const field = Array(matrix.length)
        .fill(null)
        .map((_, i) => Array(matrix[i].length).fill(0));

    for (i = 0; i < matrix.length; ++i) {
        for (j = 0; j < matrix[i].length; ++j) {
            if (matrix[i][j]) {
                field[i][j] = +matrix[i][j];
                continue;
            }

            for (let di of [-1, 0, 1]) {
                for (let dj of [-1, 0, 1]) {
                    field[i][j] += matrix[i + di]?.[j + dj] ?? 0;
                }
            }
        }
    }

    return field;
}

module.exports = {
    minesweeper,
};
