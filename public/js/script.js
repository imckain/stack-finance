$(document).ready(function() {

    const $valueSpan = $('.valueSpan2');
    const $value = $('#customRange11');
    $valueSpan.html($value.val());
    $value.on('input change', () => {
  
      $valueSpan.html($value.val());
    });
});

var ctx = $('#myChart')
var ctx2 = $('#myChart2')

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
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
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var myDoughnutChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                'rgb(255, 0, 0, .7)',
                'rgb(246, 255, 0, .7)',
                'rgb(25, 181, 33, .7)',
            ],
            borderColor: [
                'rgba(136, 135, 135, 0.473)',
                'rgba(136, 135, 135, 0.473)',
                'rgba(136, 135, 135, 0.473)',
            ],
            borderWidth: 1.5
        }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Expenses',
            'Savings',
            'Income'
        ]
    },
    options: [{
    }]
});