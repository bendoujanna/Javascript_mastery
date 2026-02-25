// const myTasks = ["Sweep the floor", "Summative", "learn JS"];
// 
// const stringTasks = JSON.stringify(myTasks);
// localStorage.setItem("dailyChores", stringTasks);
// 
// 
// const dataFromBrowser = localStorage.getItem("dailyChores");
// const restoredTasks = JSON.parse(dataFromBrowser);
// 
// console.log(restoredTasks[0]);

let tasks;

function init() {
    const savedData = localStorage.getItem("myTasks");

    if (savedData !== null) {

        tasks = JSON.parse(savedData);
        console.log("Loaded existing tasks from memory");

    } else {
        tasks = [];
        console.log("No saved data found. Starting a new list");
    }
}

init();