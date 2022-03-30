// encode-line.js

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    const result = str
        .match(/(.)\1*/g)
        ?.map((x) => (x.length > 1 ? x.length + x[0] : x[0]))
        .join("");

    return result || "";
}

module.exports = {
    encodeLine,
};

//__EOF__
