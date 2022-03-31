// vigenere-cipher.js

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
        this.A = "A";
        this.cA = this.A.charCodeAt(0);
        this.Z = "Z";
        this.cZ = this.Z.charCodeAt(0);
    }

    _shift(c, n) {
        let code = c.charCodeAt(0);
        code = (code - this.cA + n) % (this.cZ - this.cA + 1);
        code = code + (code < 0 ? this.cZ + 1 : this.cA);
        const char = String.fromCharCode(code);
        return char;
    }

    _transform(message, key, shiftDir) {
        key = key.toUpperCase();
        let ki = 0;

        let transformedMsg = message
            .toUpperCase()
            .split("")
            .map((c) => {
                if (this.A <= c && c <= this.Z) {
                    return this._shift(c, shiftDir(key[ki++ % key.length].charCodeAt(0) - this.cA));
                }
                return c;
            });

        if (!this.direct) {
            transformedMsg = transformedMsg.reverse();
        }

        return transformedMsg.join("");
    }

    encrypt(message, key) {
        if (!(message && key)) {
            throw new Error("Incorrect arguments!");
        }

        return this._transform(message.toUpperCase(), key.toUpperCase(), (x) => x);
    }

    decrypt(encryptedMessage, key) {
        if (!(encryptedMessage && key)) {
            throw new Error("Incorrect arguments!");
        }

        return this._transform(encryptedMessage.toUpperCase(), key.toUpperCase(), (x) => -x);
    }
}

module.exports = {
    VigenereCipheringMachine,
};

//__EOF__
