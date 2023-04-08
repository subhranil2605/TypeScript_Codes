type numArr = Array<number>;
type strArr = Array<string>;

// ------------------- 1 -------------------

// function can take any argument
// const last = (arr: Array<number>) => arr[arr.length - 1];

// const l = last([1, 2, 3]);

// but the function only takes number string
// const l2 = last(["a", "b", "c"]);

// generics solved the previous problem
const last = <T>(arr: T[]): T => arr[arr.length - 1];

const l = last([1, 2, 3]);

const l2 = last(["a", "b", "c"]);

// ------------------- 2 -------------------

// const makeArray = (x: number) => {
//   return [x];
// };

// const v = makeArray(5);
// const v2 = makeArray("a");

const makeArray = <T>(x: T): T[] => {
  return [x];
};

const v = makeArray(5);
const v2: string[] = makeArray<string>("a");

