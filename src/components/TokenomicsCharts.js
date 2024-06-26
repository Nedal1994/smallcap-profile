import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TokenomicsChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Team', 'Development', 'Marketing', 'Community', 'Reserve'],
        datasets: [{
          label: 'Token Allocation',
          data: [20, 25, 15, 10, 30],
          backgroundColor: ['#4e54c8', '#ffa801', '#2e86de', '#4cd137', '#ff6b81'],
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 2,
          hoverBackgroundColor: ['#574b90', '#e58e26', '#2874a6', '#44bd32', '#d63031'],
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <div className="chart-container">
      <canvas ref={chartRef} id="myChart" />
    </div>
  );
};

export default TokenomicsChart;
