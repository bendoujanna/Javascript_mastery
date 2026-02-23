// const addButton = document.getElementById("add-btn");
// const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskList.addEventListener("click", function() {
    // const newtask = document.createElement("li");
    // newtask.textContent = taskInput.value;
    // taskInput.value = "";
    // taskList.appendChild(newtask);
    if (event.target.classList.contains("delete-btn")) {
        const taskItem = event.target.parentElement;
        taskItem.remove();
    }
});