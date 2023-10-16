class Shape {
    constructor() {
        this.color = ""; // init color to empty string
    }
// method to set color
    setColor(colorVar) {
        this.color = colorVar;
    }
}

// define square
class Square extends Shape {
    render() {
        return `rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

// export square for use
module.exports = Square;