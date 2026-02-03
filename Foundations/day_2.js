// const a = 5; 
// const b = 2; 
// const c = -5; 

// console.log(a >>> b); 

// console.log(c >>> b); 

// console.log(a << b);

// console.log(c << b);

// console.log(a >> b);

// console.log(c >> b);


// const obj = {}

// obj.name = "Alice";
// console.log(obj.name);
// console.log(obj);


// const key = "y";
// obj[key] = 10;

// console.log(obj[key]);
// console.log(obj);

// const val = 0;
// val.name = "Bob"; // This will not work because val is a constant primitive value
// console.log(val); // 0
// console.log(val.name); // undefined

// let x;
// const y = (x = f()); // Or equivalently: const y = x = f();
// console.log(y); // Logs the return value of the assignment x = f().

// console.log(x = f()); // Logs the return value directly.

// // An assignment expression can be nested in any place
// // where expressions are generally allowed,
// // such as array literals' elements or as function calls' arguments.
// console.log([0, x = f(), 0]);
// console.log(f(0, x = f(), 0));

let fruitType = "Mangoes";
switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
console.log("Is there anything else you'd like?");

