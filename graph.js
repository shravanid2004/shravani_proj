// graph.js

fetch('expenditure.json')
    .then(response => response.json())
    .then(data => {
        const categories = [];
        const expenses = [];

        // Extract categories and expenses from expenditure data
        for (let key in data) {
            if (key !== "date") {
                const category = data[key].expenses[0].category;
                const amount = data[key].expenses[0].amount;

                // Check if category already exists
                const index = categories.indexOf(category);
                if (index === -1) {
                    categories.push(category);
                    expenses.push(amount);
                } else {
                    expenses[index] += amount;
                }
            }
        }

        // Draw Pie Chart
        drawPieChart(categories, expenses);

        // Draw Bar Chart
        drawBarChart(categories, expenses);
    })
    .catch(error => {
        console.error('Error fetching expenditure data:', error);
    });

function drawPieChart(categories, expenses) {
    var ctx = document.getElementById('pieChart').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: categories,
            datasets: [{
                data: expenses,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function drawBarChart(categories, expenses) {
    var ctx = document.getElementById('barChart').getContext('2d');
    var barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: categories,
            datasets: [{
                label: 'Expenses',
                data: expenses,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
