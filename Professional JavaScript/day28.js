// expense tracker 
let transactions = [
    { id: 1, description: "Groceries", amount: -50, type: "expense", date: "2024-06-01" },
    { id: 2, description: "Salary", amount: 2000, type: "income", date: "2024-06-01" },
    { id: 3, description: "Electricity Bill", amount: -100, type: "expense", date: "2024-06-01" }
];

function saveData () {
    JSON.stringify(transactions);
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