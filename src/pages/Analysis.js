import React from 'react';
import { useLocation } from 'react-router-dom';
import Chart from 'chart.js/auto';
import './Analysis.css';

const Analysis = () => {
  const location = useLocation();
  const { analysis } = location.state || { analysis: null };

  React.useEffect(() => {
    if (analysis) {
      // Example chart initialization
      new Chart(document.getElementById('exampleChart'), {
        type: 'bar',
        data: {
          labels: ['Label1', 'Label2'],
          datasets: [{
            label: 'Example Data',
            data: [12, 19],
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)'],
            borderWidth: 1,
          }],
        },
        options: {
          scales: {
            y: { beginAtZero: true },
          },
        },
      });
    }
  }, [analysis]);

  return (
    <div className="analysis-page">
      <h1>AI Analysis</h1>
      {analysis ? (
        <div>
          <p>{analysis}</p>
          <canvas id="exampleChart"></canvas>
        </div>
      ) : (
        <p>No analysis available.</p>
      )}
    </div>
  );
};

export default Analysis;
