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

const makeArray = <X, Y = number>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const v = makeArray(5, "6");
const v2 = makeArray<string | null>("a", 4);

// ------------------- 3 -------------------

// const makeFullName = (obj: { firstName: string; lastName: string }) => {
//   return {
//     ...obj,
//     fullName: obj.firstName + " " + obj.lastName,
//   };
// };

// // here is the error if we pass extra argument in the function
// const w = makeFullName({ firstName: "Subhranil", lastName: "Sarkar", age: 15 });

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

// here is the error if we pass extra argument in the function
const w = makeFullName({ firstName: "Subhranil", lastName: "Sarkar", age: 15 });
// const w2 = makeFullName({ anotherName: "Subhranil", lastName: "Sarkar", age: 15 }); // error

// ------------------- 4 -------------------

// base 
interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

// create generics using Tab
type NumberTab = Tab<number>
type StringTab = Tab<string>