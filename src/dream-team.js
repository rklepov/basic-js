// dream-team.js

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (!(members instanceof Array)) return false;
    if (members.length <= 0) return false;
    return members
        .map((x) => {
            if ("string" === typeof x) {
                return x.trim()[0].toUpperCase();
            } else {
                return "";
            }
        })
        .sort()
        .join("");
}

module.exports = {
    createDreamTeam,
};

//__EOF__
