const { Triangle, Square, Circle } = require("./shapes.js");

describe("Shapes", () => {
  describe("Square", () => {
    it('Should create a black Square svg with text equal to "BEN"', () => {
      const shape = new Square({
        color: "black",
        text: "BEN",
      });
      const result = shape.render();

      expect(result).toEqual(
        `<rect width="100%" height="100%" fill="black" />
<text x="50%" y="60%" font-size="70" text-anchor="middle" fill="white">BEN</text>`.trim(),
      );
    });

    it("Should create a empty grey Square", () => {
      const shape = new Square({
        color: "grey",
      });
      const result = shape.render();

      expect(result).toEqual(
        `<rect width="100%" height="100%" fill="grey" />
<text x="50%" y="60%" font-size="70" text-anchor="middle" fill="white"></text>`.trim(),
      );
    });

    it("Should create a Square with Text inside and the fill of #188abf", () => {
      const shape = new Square({
        color: "#188abf",
        text: "YES",
      });
      const result = shape.render();

      expect(result).toEqual(
        `<rect width="100%" height="100%" fill="#188abf" />
<text x="50%" y="60%" font-size="70" text-anchor="middle" fill="white">YES</text>`.trim(),
      );
    });
  });

  describe("Circle", () => {
    it('Should create a red Circle svg with text equal to "KEN"', () => {
      const shape = new Circle({
        color: "red",
        text: "KEN",
      });
      const result = shape.render();

      expect(result).toEqual(
        `<circle cx="150" cy="100" r="100" fill="red" />
<text x="50%" y="60%" font-size="60" text-anchor="middle" fill="white">KEN</text>`.trim(),
      );
    });

    it("Should create a empty grey Circle", () => {
      const shape = new Circle({
        color: "grey",
      });
      const result = shape.render();

      expect(result).toEqual(
        `<circle cx="150" cy="100" r="100" fill="grey" />
<text x="50%" y="60%" font-size="60" text-anchor="middle" fill="white"></text>`.trim(),
      );
    });
  });

  describe("Triangle", () => {
    it('Should create a blue Triangle svg with text equal to "bob"', () => {
      const shape = new Triangle({
        color: "blue",
        text: "bob",
      });
      const result = shape.render();

      expect(result).toEqual(
        `<polygon points="150,20 50,150 250,150" fill="blue" />
<text x="50%" y="60%" font-size="40" text-anchor="middle" fill="white">bob</text>`.trim(),
      );
    });

    it("Should render an empty grey triangle", () => {
      const shape = new Triangle({
        color: "grey",
      });
      const result = shape.render();

      expect(result).toEqual(
        `<polygon points="150,20 50,150 250,150" fill="grey" />
<text x="50%" y="60%" font-size="40" text-anchor="middle" fill="white"></text>`.trim(),
      );
    });
  });
});
