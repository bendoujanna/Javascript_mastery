const choreList = document.getElementById("chore-list");

const newChore = document.createElement("li");
newChore.textContent = "Wash the dishes";
newChore.classList.add("chore", "pending");

choreList.appendChild(newChore);


const firstChore = document.getElementById("chore-1");

firstChore.classList.remove("pending");
firstChore.classList.add("completed");
firstChore.style.color = "green";

const boardTitle = document.getElementById("board-title");
boardTitle.textContent = "Weekly Chores (1 Completed)";