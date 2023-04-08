class PointN {
  // private
  //   constructor(private x?: number, private y?: number) {}

  // pubclic
  constructor(private x?: number, private y?: number) {}

  // methdos
  draw() {
    console.log("X: " + this.x + ", Y: " + this.y);
  }

  // getter
  getX() {
    return this.x;
  }

  // setter
  setX(value: number) {
    if (value < 0) {
      throw new Error("Value cannot be less than 0.");
    } else {
      this.x = value;
    }
  }
}

let pointN = new PointN(1, 2);
let x = pointN.getX();
pointN.setX(51);

pointN.draw();

// Optional
let pointN2 = new PointN();
pointN2.draw();
