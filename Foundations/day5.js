// // arrays

// // grocery list

// const grocery = ["milk", "bread", "eggs", "cheese"];

// grocery.push("butter");
// grocery.shift();

// const newList = grocery.toSorted();

// console.log(grocery);
// console.log(newList);

// // the spare array detective
// const colors = ["red", "blue", "green", "yellow"];
// colors[5] = "purple";
// colors.forEach(color => {
//     console.log(color);
// });

// const found = colors.find((val, index) => {
//     console.log(`checking index ${index}`); 
//     return val === undefined;
// });

// // the object shallow-copy trap
// const users = [
//     { name: "Alice" },
//     { name: "Bob"}
// ];

// const usersCopy = users.slice();

// usersCopy[0].name = "Charlie";

// console.log(users[0].name);

// array-like objects

// const arrayLike = {
//     0: "a",
//     1: "b",
//     length: 2
// };

// console.log(Array.isArray(arrayLike)); 
// console.log(Array.isArray([1, 2, 3]));

// Integration challenge 1: the secure data processor

function createDataProcessor(...initialData) { // ... collects all arguments into an array
    let data = Array.from(initialData);
    return {
        getProcessedData() {
            return data.filter(item => item > 10)
                          .map(item => item * 2)
        },
        addValue(value) {
            data.push(value);
            return `added ${value} to private store`;
        }
    };
}

const processor = createDataProcessor(5, 15, 25, 8, 12);
processor.addValue(30);

console.log(processor.getProcessedData());
console.log(processor.data);


// challenge 2: the sparse error handler 

const files = ["doc1", "doc2", "doc3"]; 
files[5] = "doc4";

function validateFiles(fileArray) {
    fileArray.keys() {
        
    }

}     