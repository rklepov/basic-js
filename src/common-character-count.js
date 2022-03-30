// common-character-count.js

function countChars(s) {
    const charCount = new Map();
    s.split("").forEach((x) => {
        charCount.set(x, 1 + (charCount.get(x) || 0));
    });
    return charCount;
}

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    const charCount1 = countChars(s1);
    const charCount2 = countChars(s2);

    const commonChars = new Map();

    charCount1.forEach((v, k, m) => {
        if (charCount2.has(k)) {
            commonChars.set(k, Math.min(v, charCount2.get(k)));
        }
    });

    return Array.from(commonChars.values()).reduce((x, a) => a + x, 0);
}

module.exports = {
    getCommonCharacterCount,
};

//__EOF__
