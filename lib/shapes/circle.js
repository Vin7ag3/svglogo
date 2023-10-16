class Shape {
    constructor() {
        this.color = ""; // init color to empty string
    }
// method to set color
    setColor(colorVar) {
        this.color = colorVar;
    }
}

// define circle 
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill=${this.color}" />`;
    }
}

// export circle for use
module.exports = Circle;