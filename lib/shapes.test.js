// import shape classes
const Circle = require("./shapes/circle");
const Square = require("./shapes/square");
const Triangle = require("./shapes/triangle");

// unit test for diff shape classes
describe("Shape Test", () => {
// test circle with gray hex background
    test("Circle with gray background", () => {
        const shape = new Circle();
        shape.setColor("#808080");
        expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill=#808080" />');
    });
// test square with red background
    test("Square with red background", () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual('rect x="73" y="40" width="160" height="160" fill="red" />');
    });
// test triangle with black background
    test("Triangle with black background", () => {
        const shape = new Triangle();
        shape.setColor("black");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="black" />');
    });
});