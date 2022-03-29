const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],

    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        if (value === null) {
            value = String(value);
        }
        this.chain.push(value);
        return this;
    },
    removeLink(position) {
        if (!Number.isInteger(position) || position < 1 || position > this.chain.length) {
            this.chain = [];
            throw new Error("You can't remove incorrect link!");
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let strChain = this.chain.join(" )~~( ");
        if (strChain) {
            strChain = ["( ", strChain, " )"].join("");
        }
        this.chain = [];
        return strChain;
    },
};

module.exports = {
    chainMaker,
};

console.log(
    chainMaker
        .reverseChain()
        .reverseChain()
        .reverseChain()
        .addLink(NaN)
        .reverseChain()
        .addLink(null)
        .addLink(1.233)
        .addLink(true)
        .addLink(false)
        .removeLink(3)
        .addLink(1.233)
        .finishChain(),
    "\n",
    "( NaN )~~( null )~~( true )~~( false )~~( 1.233 )"
);
