const Letter = require("./Letter");

class Word {
    constructor(word) {
        this.letters = word.split("").map(letter => new Letter(letter))
    }

    guessLetter(letter) {
        return this.letters.filter(letterObj => letterObj.guess(letter)).length > 0
    }

    guessedCorrectly() {
        return this.letters.filter(letterObj => letterObj.visible).length === this.letters.length;
    }

    toString() {
        return this.letters.join("")
    }

    getSolution() {
        return this.letters.map(letterObj =>letterObj.getSolution()).join("")
    }
}

module.exports = Word;
