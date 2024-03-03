var expenseCategories = [];

function addExpenseCategory() {
    var categoryName = prompt("Enter category name:");
    if (categoryName) {
        expenseCategories.push({
            name: categoryName,
            amount: 0
        });
        updateExpenseCategories();
    }
}

function updateExpenseCategories() {
    var expenseCategoriesDiv = document.getElementById('expenseCategories');
    expenseCategoriesDiv.innerHTML = '';
    expenseCategories.forEach(function(category, index) {
        var categoryInput = document.createElement('div');
        categoryInput.innerHTML = '<input type="number" placeholder="' + category.name + ' expense" id="expense_' + index + '">' +
                                   '<button onclick="removeExpenseCategory(' + index + ')">Remove Category</button>';
        expenseCategoriesDiv.appendChild(categoryInput);
    });
}

function removeExpenseCategory(index) {
    expenseCategories.splice(index, 1);
    updateExpenseCategories();
}

function calculateAndShowGraphs() {
    calculateBudget();

}

function calculateBudget() {
    var income = parseFloat(document.getElementById('income').value);
    var totalExpenses = 0;
    expenseCategories.forEach(function(category, index) {
        var expenseAmount = parseFloat(document.getElementById('expense_' + index).value);
        category.amount = expenseAmount;
        totalExpenses += expenseAmount;
    });
    
    var savings = income - totalExpenses;
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "Total Expenses: $" + totalExpenses.toFixed(2) + "<br>" +
                                "Savings: $" + savings.toFixed(2);
}

function resetBudget() {
    document.getElementById('income').value = '';
    expenseCategories = [];
    document.getElementById('expenseCategories').innerHTML = '';
    document.getElementById('result').innerHTML = '';
}
