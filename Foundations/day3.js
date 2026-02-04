// // Do this:
// // This always returns a boolean value
// const isObject = (obj) => !!obj && typeof obj === "object";

// // Or this:
// const isObject = (obj) => Boolean(obj) && typeof obj === "object";

// // Or this:
// const isObject = (obj) => obj !== null && typeof obj === "object";

// // Instead of this:
// // This may return falsy values that are not equal to false
// const isObject = (obj) => obj && typeof obj === "object";

// const good = Boolean(expression);
// const good2 = !!expression;

// // const bad = new Boolean(expression); // don't use this!

// if (new Boolean(true)) {
//   console.log("This log is printed.");
// }

// if (new Boolean(false)) {
//   console.log("This log is ALSO printed.");
// }

// const myFalse = new Boolean(false); // myFalse is a Boolean object (not the primitive value false)
// const g = Boolean(myFalse); // g is true
// const myString = new String("Hello"); // myString is a String object
// const s = Boolean(myString); // s is true


// // switch statement

// switch (expression) {
//   case label1:
//     statements1;
//     break;
//   case label2:
//     statements2;
//     break;
//   // …
//   default:
//     statementsDefault;
// }

// let day = 3;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   default:
//     dayName = "Unknown Day";
// }

// console.log(dayName); 

// let i = 0;
// do {
//   console.log(i);
//   i += 1;
// } while (i < 5);

// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {  // label to break out of both loops
//   console.log("Outer loops:", x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Inner loops:", z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }

let i = 0;
let j = 10;
checkIandJ: while (i < 4) {
  console.log(i);
  i += 1;
  checkJ: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue;
    }
    console.log(j, "is odd.");
  }
  console.log("i =", i);
  console.log("j =", j);
}