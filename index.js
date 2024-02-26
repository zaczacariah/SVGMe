const { ask } = require("./lib/prompts.js");
const { Circle, Triangle, Square } = require("./lib/shapes.js");
const fs = require("fs");

async function init() {
  var results = await ask(); // Intiating command line prompts and awaiting responses
  var shape;

  //Create relevant shape
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
      throw Error("Shape is undefined"); // Should never run
  }

  //SVG Html Wrapper
  var svgStart =
    '<svg height="200px" width="300px" xmlns="http://www.w3.org/2000/svg">';
  var svgEnd = "</svg>"; //CLosing HTML Wrapper
  shape = shape.render();
  var markdown = `${svgStart} ${shape} ${svgEnd}`; //Combining Markdown

  writeToFile("./examples/logo.svg", markdown); //Creating logo.svg
}
init();

//Write file function
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Generated Logo.svg"),
  );
}
