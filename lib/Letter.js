class Letter {
  constructor(letter) {
    this.char = letter
    this.visible = false;
    if (!letter.toLowerCase().match(/^[0-9a-z]+$/)) {
        this.visible = true;
    }
  }

  toString() {
    if (this.visible === true) {
        return this.char
    } else {
        return "_"
    }
  }

  guess(letter) {
    if (letter.toLowerCase() === this.char.toLowerCase()) {
        if (this.visible) {
            throw 'Ah ah ah, already guessed scumbag'
        }
        this.visible = true
        return true
    } else {
        return false;
    }
  }

  getSolution() {
    return this.char
  }
}

module.exports = Letter;
