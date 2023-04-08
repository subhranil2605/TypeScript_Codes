class PointN {
  // private
    constructor(private _x?: number, private _y?: number) {}

  // pubclic
  // constructor(public x?: number, public y?: number) {}

  // methdos
  draw() {
    console.log("X: " + this._x + ", Y: " + this._y);
  }

  // getter
  get x() {
    return this._x;
  }

  // setter
  set x(value: number | undefined) {
    if (value && value < 0) {
      throw new Error("Value cannot be less than 0.");
    } else {
      this._x = value;
    }
  }
}

let pointN = new PointN(1, 2);
let x = pointN.x
pointN.x = 51;

pointN.draw();

// Optional
let pointN2 = new PointN();
pointN2.draw();
