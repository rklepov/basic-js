// transform-array.js

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!(arr instanceof Array)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    const result = [];
    let discarded = false;

    for (i = 0; i < arr.length; ++i) {
        switch (arr[i]) {
            case "--double-prev":
                if (result.length > 0 && !discarded) {
                    result.push(result[result.length - 1]);
                }
                discarded = false;
                break;

            case "--double-next":
                if (i + 1 < arr.length) {
                    result.push(arr[i + 1]);
                }
                break;

            case "--discard-prev":
                if (result.length > 0 && !discarded) {
                    result.pop();
                }
                discarded = !discarded;
                break;

            case "--discard-next":
                i += 1;
                discarded = true;
                break;

            default:
                result.push(arr[i]);
                discarded = false;
                break;
        }
    }

    return result;
}

module.exports = {
    transform,
};

//__EOF__
