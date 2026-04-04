const transactionList = document.getElementById("expenses"); // Updated ID
const balanceDisplay = document.getElementById("total-balance"); // Updated ID
const expensesDisplay = document.getElementById("total-expenses"); // Updated ID
const averageDisplay = document.getElementById("average-expense"); // New ID
const form = document.getElementById("expense-form"); // Updated ID
const descriptionInput = document.getElementById("expense-description"); // Updated ID
const amountInput = document.getElementById("expense-amount"); // Updated ID
const typeInput = document.getElementById("expense-type"); // New Dropdown
const dateInput = document.getElementById("expense-date"); // New Date Input

let transactions = [];

function saveData() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function loadData() {
    const data = localStorage.getItem("transactions");
    if (data) {
        transactions = JSON.parse(data);
    } 
}

function renderList() {
    transactionList.innerHTML = "";
    
    transactions.forEach(transaction => {
        let listItem = document.createElement("li");
        
        listItem.style.color = transaction.type === "expense" ? "red" : "green";
        
        listItem.innerHTML = `
            <strong>${transaction.date}</strong> - ${transaction.description}: $${Math.abs(transaction.amount)} 
            <button class="delete-btn" onclick="deleteTransaction(${transaction.id})">X</button>
        `;
        
        transactionList.appendChild(listItem);
    });
}

function updateTotals() {
    const totalBalance = transactions.reduce((sum, item) => sum + item.amount, 0);

    const allExpenses = transactions.filter(item => item.type === "expense");
    
    const totalExpenses = allExpenses.reduce((sum, item) => sum + item.amount, 0);

    let averageExpense = 0;
    if (allExpenses.length > 0) {
        averageExpense = totalExpenses / allExpenses.length;
    }

    balanceDisplay.textContent = totalBalance.toFixed(2);
    expensesDisplay.textContent = (totalExpenses * -1).toFixed(2); 
    averageDisplay.textContent = (averageExpense * -1).toFixed(2); 
}

function addTransaction(event) {
    event.preventDefault(); 

    let inputAmount = Number(amountInput.value);

    if (typeInput.value === "expense") {
        inputAmount = -Math.abs(inputAmount); 
    } else {
        inputAmount = Math.abs(inputAmount); 
    }

    const newTransaction = {
        id: Math.floor(Math.random() * 10000000), 
        description: descriptionInput.value,
        amount: inputAmount,
        type: typeInput.value,
        date: dateInput.value
    };

    transactions.push(newTransaction);
    
    saveData();
    renderList();
    updateTotals();

    descriptionInput.value = "";
    amountInput.value = "";
    typeInput.value = "";
    dateInput.value = "";
}

function deleteTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    saveData();
    renderList();
    updateTotals();
}

form.addEventListener("submit", addTransaction);

loadData();
renderList();
updateTotals();