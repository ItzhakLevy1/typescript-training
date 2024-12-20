import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
console.log("myShape : " + myShape.getInfo());

let myCircle = new Circle(5, 10, 15);
console.log("myCircle : " + myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 3, 7);
console.log("myRectangle : " + myRectangle.getInfo());
