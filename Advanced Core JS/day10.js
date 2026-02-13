// closures

function createCounter() {
    let count = 0;
    return {
        increment() {
            count += 1
        },
        getCount(){
            return count;
        }

    }
}

const myCounter = createCounter();
myCounter.increment();
console.log(myCounter.getCount());
console.log(myCounter.count);


function idGenerator(prefix) {
    let lastId = 0;
    return function(){
        lastId += 1
        return `${prefix}_${lastId}`   
    }
}


const taskGen = idGenerator("task");
const userGen = idGenerator("user");

console.log(taskGen());
console.log(taskGen());
console.log(userGen());


function createVault(initialPassword, initialSecret) {
    
    let password = initialPassword; 
    let secret = initialSecret;

    return {
        accessVault(inputPassword) {
            if (inputPassword === password) {
                console.log("Correct Password!");
                return secret;
            } else {
                return "Access Denied!";
            }
        }
    };
}

const myVault = createVault("beaugosse", "I have a crush on JS");
console.log(myVault.accessVault("beaugosse")); 
console.log(myVault.accessVault("wrong123"));  