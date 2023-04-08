// Inline annotations
let drawPoint = (point: { x: number; y: number }) => {};

drawPoint({
  x: 1,
  y: 2,
});

// Interface
interface Point {
  x: number;
  y: number;
}

let altDrawPoint = (point: Point) => {};

altDrawPoint({ x: 1, y: 2 });
