// object oriented programming (OOP) in JavaScript

// MDN challenge
// part 1
class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        const perimeter = this.sides * this.sideLength;
        console.log(`The perimeter of the ${this.name} is ${perimeter}`);
    }
}

const square = new Shape("square", 4, 5);
square.calcPerimeter(); 

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter(); 

// part 2
class Square extends Shape {
    
    constructor(sideLength) {
        super("square", 4, sideLength);
    }

    calcArea() {
        const area = this.sideLength * this.sideLength;
        console.log(`The area of the ${this.name} is ${area}`);
    }
}

const mySquare = new Square(5);

mySquare.calcPerimeter(); 

mySquare.calcArea();      