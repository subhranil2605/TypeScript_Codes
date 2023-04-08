class PointN {
  // Fields
  x: number | undefined;
  y: number | undefined;
  private z: number | undefined;

  constructor(x?: number, y?: number, z?: number) {
    this.x = x;
    this.y = y;
  }

  // methdos
  draw() {
    console.log("X: " + this.x + ", Y: " + this.y);
  }

  public getDistance(another: PointN) {
    // ...
  }
}

let pointN = new PointN(1, 2);
pointN.x = 10; // public member

// cannot do this, because 'z' is the private member of the class
// pointN.z = 50;
pointN.draw();

let pointN2 = new PointN();
pointN2.draw();
