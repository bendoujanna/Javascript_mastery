// // Objects 

// const myObj = {};
// const str = "myString";
// const rand = Math.random();
// const anotherObj = {};

// // Create additional properties on myObj
// myObj.type = "Dot syntax for a key named type";
// myObj["date created"] = "This key has a space";
// myObj[str] = "This key is in variable str";
// myObj[rand] = "A random number is the key here";
// myObj[anotherObj] = "This key is object anotherObj";
// myObj[""] = "This key is an empty string";

// console.log(myObj);
// console.log(myObj.myString); // 'This key is in variable str'

//dynamic profile 
let userProfile = {};
let keyName = "usename";
userProfile[keyName] = "Janna";
userProfile["account type"] = "Premium";
console.log(userProfile);

// the constructor challenge 

function Laptop(brand, ram) {
    this.brand =brand;
    this.ram=ram;
}

Laptop.prototype.showSpecs = function() {
        const result = `This ${this.brand} has ${this.ram}GB of RAM.`;
        console.log(result);
};

const myLaptop = new Laptop("Dell", 16);
const myLaptop2 = new Laptop("HP", 32);

myLaptop.showSpecs(); 
myLaptop2.showSpecs(); 

// the reference comparison

const obj1 = {id:1};
const obj2 = {id:1};

console.log(obj1 === obj2); 

// the method master

function Rectangle (width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function() {
    const result = this.width * this.height;
    console.log(result);
}

const Rectangle1 = new Rectangle(5, 10);

Rectangle1.area();

// getter

const rectangle = {
    width: 5,
    height: 10, 
    get area() {
        return this.width * this.height;
    }   
};

console.log(rectangle.area);