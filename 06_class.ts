class PointN {
  // private
  //   constructor(private x?: number, private y?: number) {}

  // pubclic
  constructor(private x?: number, private y?: number) {}

  // methdos
  draw() {
    console.log("X: " + this.x + ", Y: " + this.y);
  }

  public getDistance(another: PointN) {
    // ...
  }
}

let pointN = new PointN(1, 2);
// pointN.x = 10; // cannot access this

pointN.draw();

let pointN2 = new PointN();
pointN2.draw();
