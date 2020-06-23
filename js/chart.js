function renderChart(labels, shownDataset, clickedDataset) {
const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: labels,
        datasets: [{
            label: 'Shown',
            backgroundColor: 'rgb(51, 51, 51)',
            borderColor: 'rgb(255, 99, 132)',
            data: shownDataset
        },
        {
            label: 'Clicked',
            backgroundColor: 'rgb(76, 175, 80)',
            borderColor: 'rgb(255, 99, 132)',
            data: clickedDataset
        }]
    },

    // Configuration options go here
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
