//Parent Class to handle commonality of shapes: text & color
class Shape {
  constructor({ color, text }) {
    this.color = color || "black";
    this.text = text || "";
  }

  render() {
    //Shouldn't ever call render on parent function
    return new Error("Can't call genMarddown() on Shape class", (msg) =>
      console.error(msg),
    );
  }
}

class Triangle extends Shape {
  constructor(...children) {
    super(...children);
  }

  render() {
    return `<polygon points="150,20 50,150 250,150" fill="${this.color}" />
<text x="50%" y="60%" font-size="40" text-anchor="middle" fill="white">${this.text}</text>`;
  }
}

class Circle extends Shape {
  constructor(...children) {
    super(...children);
  }
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.color}" />
<text x="50%" y="60%" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`;
  }
}

class Square extends Shape {
  constructor(...children) {
    super(...children);
  }

  render() {
    return `<rect width="100%" height="100%" fill="${this.color}" />
<text x="50%" y="60%" font-size="70" text-anchor="middle" fill="white">${this.text}</text>`;
  }
}

module.exports = { Triangle, Circle, Square };
