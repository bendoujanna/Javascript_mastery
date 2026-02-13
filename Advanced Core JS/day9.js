// // scope and hoisting
// test();
// let user = "John";

// console.log(user);

// function test () {
//     let user = "Jane";
//     console.log(user)

//     if (test) {
//         let user = "Jack";
//         console.log(`Inside if block: ${user}`); 
//     }

// }

// test();

// challenge 2

// greet();
// console.log(x);
// console.log(y);
// var x = 10;
// let y = 20;

// function greet() {
//     console.log("Hello!");
// }


// challenge 3

for (var i = 0; i <= 3; i++) {
    console.log(i);
}

for (let j = 0; j <= 3; j++) {
    console.log(j);
}

console.log(i);
console.log(j); // ReferenceError: j is not defined
