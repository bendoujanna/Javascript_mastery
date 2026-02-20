// async / await

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: "Janna" }), 1000);
    });
}

function getTasks(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve(["Write Code", "Learn Async", "Update Notion"]);
            } else {
                reject("User tasks not found");
            }
        }, 1000);
    });
}

async function displayData() {
    try {
        const user = await getUser();
        console.log("User:", user.name);
        
        const tasks = await getTasks(user.id);
        console.log("Tasks:", tasks);
    } catch (error) {
        console.error("Error:", error);
    }
}

displayData();


// exercise 2

function fetchWeather() {
    return new Promise((resolve, reject) => {
        const temp = Math.floor(Math.random() * 35);
        setTimeout(() => resolve(temp), 500);
    });
}

async function morningRoutine() {
    try {
        const temperature = await fetchWeather();
        console.log(`Current Temp: ${temperature}°C`);

        if (temperature < 15) {
            console.log("Wear a jacket.");
        } else {
            console.log("T-shirt is fine.");
        }
    } catch (err) {
        console.log("Failed to get weather.");
    }
}

morningRoutine();


// exercise

async function fastTask() {
    return new Promise(res => setTimeout(() => res("Fast Done"), 500));
}

async function slowTask() {
    return new Promise(res => setTimeout(() => res("Slow Done"), 2000));
}

async function runTasks() {
    console.time("Timer");
    
    const result1 = await fastTask();
    console.log(result1);
    
    const result2 = await slowTask();
    console.log(result2);
    
    console.timeEnd("Timer");
}

runTasks();