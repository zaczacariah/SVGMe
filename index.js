const { ask } = require("./lib/prompts.js");
const { Circle, Triangle, Square } = require("./lib/shapes.js");
const fs = require("fs");

async function init() {
  var results = await ask();
  var shape;

  switch (results.shape) {
    case "rect":
      shape = new Square(results);
      break;
    case "circle":
      shape = new Circle(results);
      break;
    case "triangle":
      shape = new Triangle(results);
      break;
    default:
      throw Error("Shape is undefined");
  }

  writeToFile("./examples/shape.svg", shape.render());
  console.log(shape.render());
}
init();

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!"),
  );
}
