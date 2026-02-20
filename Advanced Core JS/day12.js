// promises 

// let p = new Promise ((resolve, reject) => {
    // let a = 1+1
    // if (a ==2) {
        // resolve("success")
    // } else {
        // reject("failed")
    // }
// })
// 
// p.then((message) => {
    // console.log("this is in the then " + message)
// }).catch((message) => {
    // console.log("this is in the catch" + message)
// })

function delayedTask(duration) {
  
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (duration > 5000) {
                    reject("too slow");
                } else {
                    resolve(`task finished after ${duration}`)
                }
            }, duration);
        })
    }

delayedTask(2000)
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

// user authentication
function authUser(username, password) {
    return new Promise((resolve, reject) => {
        if (password == 1234) {
            resolve(`Welcome, ${username}`)
        } else {
            reject("Invalid credentials")
        }
    });
}

authUser("Janna", 1234)
    .then((message) => console.log(message))
    .catch((error) => console.error(error));


// random number race

function checkLuNum () {
    return new Promise((resolve, reject) =>{
        let num = Math.floor(Math.random() * 10 + 1)
        setTimeout(() =>{
           if (num > 5) {
            resolve(num)
           } else {
            reject("unlucky draw")
           }
        }, 5000)
    })
}

checkLuNum()
    .then((message) => console.log(message))
    .catch((error) => console.error(error));


