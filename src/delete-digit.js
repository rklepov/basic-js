const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    return Math.max(
        ...n
            .toString()
            .split("")
            .map((e, i, a) =>
                Number(
                    a
                        .slice(0, i)
                        .concat(a.slice(i + 1))
                        .join("")
                )
            )
    );
}

module.exports = {
    deleteDigit,
};
