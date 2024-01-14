// getName("John");

// function getName(name) {
//   // hoisted in javascript;
//   console.log(name);
// }
// classical problem of infinite function currying.
let sum = 0;
function currySum(...a) {
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return function (...b) {
    if (!b.length) {
      return sum;
    } else {
      return currySum(...b);
    }
  };
}

// function currySum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return function (e) {
//           return a + b + c + d + e;
//         };
//       };
//     };
//   };
// }
console.log(
  currySum(1, 2, 3, 4, 5)(2, 3, 4)(3, 4, 5, 6, 7, 8)(4, 8, 9, 10, 1, 12, 13)(
    5,
    17,
    18,
    19,
    21
  )()
);
// currySum(1)(2)(3)(4)(5)(6)...................()
//1. finite argument + infinite function calls
// 2. infinite arguments + infinite function calls.

const str = "Sumit";
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
console.log([...arr1, ...arr2]);

// rest operator
const numbersSum = (a, ...b) => {
  console.log("str", a, b);
};

numbersSum(1, 2, 3, 4, 5, 6, 7, 8, 9);

const obj = {
  name: "Sumit Kapoor",
  age: 29,
  company: "Adobe",
};
console.log(obj["age"]);
console.log(obj["name"]);
console.log(obj["company"]);

console.log(Object.keys(obj));
console.log(Object.values(obj));

const obj2 = {
  Hobbies: "cricket",
  nativePlace: "Delhi",
  currentPlace: "Bangalore",
};

const obj3 = { ...obj, ...obj2 };
console.log(obj3);
console.log(Object.entries(obj3));
let obj4 = {};
Object.assign(obj4, obj3);
console.log(obj4);

for (let value in obj4) {
  console.log(value, obj4[value]);
}

class A {
  constructor(firstName) {
    //
    this.name = firstName;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}

class B extends A {
  constructor(name) {
    // parameterized constructor
    super(name);
  }
}

const objectOfB = new B("John Doe");

const firstName = objectOfB.getName();

console.log(firstName);

Array.prototype.print = function () {
  console.log(this);
};

const arr21 = ["Obama", "Musk", "Adani", "Ambani"];
arr21.print();
console.log(this);
