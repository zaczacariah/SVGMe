const inq = require("inquirer");
const inqMaxLen = require("inquirer-maxlength-input-prompt"); //import unique, lenght limiting prompt

async function ask() {
  inq.registerPrompt("maxlength", inqMaxLen); //Register new prompt type

  return inq.prompt([
    {
      type: "maxlength",
      message: "Enter your text",
      name: "text",
      maxLength: 3, //Limit to 3 char
    },
    {
      type: "input",
      message: "What color?",
      name: "color",
    },
    {
      type: "list",
      message: "Select Shape",
      choices: [
        {
          name: "Circle",
          value: "circle",
        },
        {
          name: "Triangle",
          value: "triangle",
        },
        {
          name: "Square",
          value: "rect",
        },
      ],
      name: "shape",
    },
  ]);
}

module.exports = { ask };
