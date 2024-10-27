import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(5, 10, 15);

let myRectangle = new Rectangle(0, 0, 3, 7);

// Declare an empty array of shapes
let theShapes: Shape[] = [];

// Add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes) {
  console.log();
  console.log("First log: " + tempShape.getInfo());
  console.log("second log: " + tempShape.calculateArea());
  console.log();
}
