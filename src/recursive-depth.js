const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    constructor() {
        this.depth = 0;
        this.maxdepth = 0;
    }

    calculateDepth(arr, rec) {
        if (!rec) {
            this.depth = 0;
            this.maxdepth = 0;
        }

        this.depth += 1;

        if (this.maxdepth < this.depth) {
            this.maxdepth = this.depth;
        }

        arr.map((x) => {
            if (x instanceof Array) {
                this.calculateDepth(x, true);
            }
        });

        this.depth -= 1;

        return this.maxdepth;
    }
}

module.exports = {
    DepthCalculator,
};
