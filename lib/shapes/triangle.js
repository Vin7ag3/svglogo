class Shape {
    constructor() {
        this.color = ""; // init color to empty string
    }
// method to set color
    setColor(colorVar) {
        this.color = colorVar;
    }
}

// define triangle
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// export triangle for use
module.exports = Triangle;