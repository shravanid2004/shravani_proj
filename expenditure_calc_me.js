
function addExpenditureInFile() {
    var currentDate = new Date();
    var currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    var expenditureData = {
        date: currentDate.getDate() + ' ' + currentMonth + ' ' + currentDate.getFullYear(),
        expenses: []
    };

    expenseCategories.forEach(function(category, index) {
        var expenseAmount = parseFloat(document.getElementById('expense_' + index).value);
        if (expenseAmount > 0) {
            expenditureData.expenses.push({
                category: category.name,
                amount: expenseAmount
            });
        }
    });

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "save_expenditure.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log("Expenditure data saved successfully.");
                alert("Expenditure data saved successfully.");
            } else {
                console.error("Error saving expenditure data.");
                alert("Error saving expenditure data.");
            }
        }
    };
    xhr.send(JSON.stringify(expenditureData));
}
