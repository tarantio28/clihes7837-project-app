import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function CollectionValueBarGraph() {
    const data = {
        labels: ['Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Eevee'],
        datasets: [
            {
                label: 'Card Value in USD',
                data: [220, 500, 160, 180, 240],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#ffffff', // Set legend text color to white
                },
            },
            title: {
                display: true,
                text: 'Pokémon Card Collection Value',
                color: '#ffffff', // Set title color to white
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#ffffff', // Set x-axis labels color to white
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#ffffff', // Set y-axis labels color to white
                },
            },
        },
        maintainAspectRatio: false,
    };

    const chartContainerStyle = {
        width: '400px',
        height: '300px',
        margin: '0 auto',
    };

    return (
        <div style={chartContainerStyle}>
            <Bar data={data} options={options} />
        </div>
    );
}

export default CollectionValueBarGraph;
