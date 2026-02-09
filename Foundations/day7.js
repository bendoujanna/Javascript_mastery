//  CLI TO DO APP //


// constructor function for task

function Task(id, description, status, date) {
    this.id = id;
    this.description = description;
    this.status = "pending";
    this.date = new Date();
}

let tasks = [];
function addTask(description) {
    const id = tasks.length + 1;
    const newTask = new Task(id, description);
    tasks.push(newTask);
    console.log(`Task added: ${description}`);
}

function listTasks() {
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Description: ${task.description}, Status: ${task.status}, Date: ${task.date}`);
    })
}

//  delete tasks
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    console.log(`Task with ID ${id} deleted.`);
}

// update task status
function updateTask(id, newStatus) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.status = newStatus;
        console.log(`Task "${task.description}" updated to status: ${newStatus}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}


// CLI handling
const command = process.argv[2]; // add and list
const description = process.argv[3]; // task description
const idArg = parseInt(process.argv[3]); // task id for deletion
const newStatus = process.argv[4]; // new status for updating task

// Temporary hardcoded tasks for testing the list function
tasks.push(new Task(1, "Test Task 1"));
tasks.push(new Task(2, "Test Task 2"));

if (command === "add") {
    addTask(description);
} else if (command === "list") {
    listTasks();
} else if (command === "delete") {
    deleteTask(idArg);
} else if (command === "update") {
    updateTask(idArg, newStatus);
} else {
    console.log("Unknown command. Use 'add', 'list', 'delete', or 'update'.");
}

    

