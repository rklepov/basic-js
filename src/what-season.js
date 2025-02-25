// what-season.js

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    if (!date) {
        return "Unable to determine the time of year!";
    }

    if (!(date instanceof Date) || Object.getOwnPropertyNames(date).includes("toString")) {
        throw new Error("Invalid date!");
    }

    const month = date.getMonth() % 11;

    if (month < 2) {
        return "winter";
    } else if (month < 5) {
        return "spring";
    } else if (month < 8) {
        return "summer";
    }
    return "autumn";
}

module.exports = {
    getSeason,
};

//__EOF__
