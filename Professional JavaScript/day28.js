// expense tracker 
let transactions = [
    { id: 1, description: "Groceries", amount: -50, type: "expense", date: "2024-06-01" },
    { id: 2, description: "Salary", amount: 2000, type: "income", date: "2024-06-01" },
    { id: 3, description: "Electricity Bill", amount: -100, type: "expense", date: "2024-06-01" }
];

function saveData () {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}
function loadData () {
    const data = localStorage.getItem("transactions");
    if (data) {
        transactions = JSON.parse(data);
    } else {
        transactions = [];
    }
}

let transactionList = document.getElementById("expense-list");
function renderList () {
    transactionList.innerHTML = "";
    transactions.forEach(transaction => {
        let listItem = document.createElement("li");
        if (transaction.amount < 0) {
            transaction.type = "expense";
        } else {
            transaction.type = "income";
        }
        if (transaction.type === "expense") {
            listItem.style.color = "red";
        } else {
            listItem.style.color = "green";
        }
        listItem.textContent = `${transaction.description}: $${transaction.amount})`;
        transactionList.appendChild(listItem);
    });
}

loadData();
renderList();