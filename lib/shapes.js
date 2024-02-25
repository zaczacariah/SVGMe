class Shape {
  constructor({ color }) {
    this.color = color || "black";
  }

  render() {
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
    return `
    <svg height="200px" width="300px" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,20 50,150 250,150" fill="${this.color}" />
      <text x="50%" y="60%" font-size="40" text-anchor="middle" fill="white">TRI</text>
    </svg>
        `;
  }
}

class Circle extends Shape {
  constructor(...children) {
    super(...children);
  }
  render() {
    return `
    <svg height="200px" width="300px" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="100" fill="${this.color}" />
      <text x="50%" y="60%" font-size="60" text-anchor="middle" fill="white">CIR</text>
    </svg>
        `;
  }
}

class Square extends Shape {
  constructor(...children) {
    super(...children);
  }

  render() {
    return `
    <svg height="200px" width="300px" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${this.color}" />
      <text x="50%" y="60%" font-size="70" text-anchor="middle" fill="white">SQR</text>
    </svg>
        `;
  }
}

module.exports = { Triangle, Circle, Square };
