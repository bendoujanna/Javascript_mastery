// Functions

// multi-type calculator

function calculateArea(width, height) {
    return width * height;

}

console.log(calculateArea(5, 10)); 


// the reference modifier 

function updateValue(theObject) {
    theObject.score = 100;
}

const player = { name: "Alice", score: 0 };

updateValue(player);
console.log(player.score);

// anonymous mapping 

const numbers = [1, 2, 3, 4, 5];

// function double (num) {
//     return num * 2;
// }

// doubleNum = numbers.map(double); 
// console.log(doubleNum);

// const doubleNum = numbers.map(function(num) {
//     return num * 2;
// });

// console.log(doubleNum);


const doubleNumShort = numbers.map(num => num * 2);
console.log(doubleNumShort);

//  the closure bank account 

function createAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit(amount) {
            balance += amount;
        },
        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
            } else {
                console.log("Insufficient funds");
            }
        },
        checkBalance() {
            return balance;
        }

    }
}

const myAccount = createAccount(100);
console.log(myAccount.checkBalance()); 
myAccount.deposit(50);
console.log(myAccount.checkBalance());
myAccount.withdraw(30);
console.log(myAccount.checkBalance());
myAccount.withdraw(150); 
console.log(myAccount.checkBalance());

// the secure voting system

function createVotingSystem(candidateName) {
    let votes = 0;
    return {
        castVote(passcode) {
            if (passcode === "secretPasscode") {
                votes += 1;
                return "Vote cast successfully!";
            } else {
                throw new Error("Unauthorized: Invalid passcode");
            }
        },
        getResults() {
            return `${candidateName} has ${votes} votes.`;
        }
    }
}

const votingSystem = createVotingSystem("Alice");
try {
    console.log(votingSystem.castVote("secretPasscode"));
    console.log(votingSystem.castVote("wrongPasscode"))
} catch (error) {
    console.error(error.message);
}

console.log(votingSystem.getResults());
console.log(votingSystem.votes);