// sort-by-height.js

function getAllIndexes(arr, val) {
    const indexes = [];
    i = -1;
    while ((i = arr.indexOf(val, i + 1)) != -1) {
        indexes.push(i);
    }
    return indexes;
}

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    const GAP_LABEL = -1;
    const gapIx = getAllIndexes(arr, GAP_LABEL);
    const sorted = arr.filter((x) => x !== GAP_LABEL).sort((a, b) => a - b);
    return arr.map((x, i) => (gapIx.includes(i) ? GAP_LABEL : sorted[i - gapIx.reduce((a, j) => a + (j < i), 0)]));
}

module.exports = {
    sortByHeight,
};

//__EOF__
