"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(5, 10, 15);
let myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
// Declare an empty array of shapes
let theShapes = [];
// Add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let tempShape of theShapes) {
    console.log();
    console.log("First log: " + tempShape.getInfo());
    console.log("second log: " + tempShape.calculateArea());
    console.log();
}
