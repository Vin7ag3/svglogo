// import req
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// import shape classes
const Circle = require("./lib/shapes/circle");
const Square = require("./lib/shapes/square");
const Triangle = require("./lib/shapes/triangle");

// path where SVG will be saved
const svgPath = path.join(__dirname, "examples", "logo.svg");

// logo shapes to respective classes
const shapeClasses = {
    circle: Circle,
    square: Square,
    triangle: Triangle,
};

// use inquirer to collect input
inquirer
    .prompt([
        {
            type: "input",
            name: "logoName",
            message: "Enter 1-3 characters for the logo",
        },
        {
            type: "input",
            name: "textColor",
            message: "Enter hex number or color name for the logo text color",
        },
        {
            type: "input",
            name: "logoColor",
            message: "Enter hex number or color name for the logo background color",
        },

        {
            type: "list",
            name: "logoShape",
            message: "Choose a logo shape",
            choices: ["circle", "square",  "triangle"],
        },
])

.then((data) => {
// determine selected shape class
const ShapeClass = shapeClasses[data.logoShape];

    if (!ShapeClass) {
        console.log("Not a valid choice");
        return;
    }

// create instance of selected shape class
const shape = new ShapeClass();
    shape.setColor(data.logoColor);

// generate SVG markup
const svgMarkup= `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <g>
    ${shape.render()} fill="${data.logoColor}"
    <text x="150" y="130" text-anchor="middle" font-size="28" fill="${data.textColor}">${data.logoName}</text>
  </g>
</svg>`;

// write svg to file path 
fs.writeFile(svgPath, svgMarkup, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Generated logo.svg");
    }
  });
})  
.catch((err) => console.error(err));