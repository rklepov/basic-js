// dns-stats.js

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    const dnsNames = domains
        .map((domain) =>
            domain
                .split(".")
                .reverse()
                .map((x, i, a) => ["", ...a.slice(0, i + 1)].join("."))
        )
        .flat();

    const dnsCounter = new Map();

    for (let dns of dnsNames) {
        dnsCounter.set(dns, 1 + (dnsCounter.get(dns) ?? 0));
    }

    return Object.fromEntries(Array(...dnsCounter.entries()).sort((a, b) => b[1] - a[1]));
}

module.exports = {
    getDNSStats,
};

//__EOF__
