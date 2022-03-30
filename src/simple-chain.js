// simple-chain.js

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

//__EOF__
