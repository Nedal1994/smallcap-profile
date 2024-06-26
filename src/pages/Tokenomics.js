import React, { useState, useRef, useEffect } from 'react';
import './Tokenomics.css';
import heroBanner from '../assets/images/token.png';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Tokenomics = () => {
  const [tokenDistribution, setTokenDistribution] = useState({
    privateSale: 5,
    ico: 5,
    publicSale: 15,
    partnerships: 10,
    development: 10,
    marketing: 15,
    staking: 15,
    airdrops: 2,
    cofounderAdvisors: 10,
    team: 5,
  });

  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  const chartData = {
    labels: [
      'Private Sale',
      'ICO',
      'Public Sale',
      'Partnerships',
      'Development',
      'Marketing',
      'Staking',
      'Airdrops',
      'Co-Founder & Advisors',
      'Team',
    ],
    datasets: [
      {
        label: 'Token Allocation',
        data: Object.values(tokenDistribution),
        backgroundColor: [
        'rgba(147, 52, 47, 1)',       // Tomato
  'rgba(255, 64, 129, 1)',      // Pink
  'rgba(245, 0, 87, 1)',        // Hollywood Cerise
  'rgba(156, 39, 176, 1)',      // Purple
  'rgba(103, 58, 183, 1)',      // Indigo
  'rgba(67, 160, 71, 1)',       // Green
  'rgba(33, 150, 243, 1)',      // Blue
  'rgba(0, 188, 212, 1)',       // Cyan
  'rgba(255, 193, 7, 1)',       // Amber
  'rgba(255, 87, 34, 1)'        // Deep Orange
        ],
        borderColor: [
          'rgba(147, 52, 47, 1)',       // Tomato
  'rgba(255, 64, 129, 1)',      // Pink
  'rgba(245, 0, 87, 1)',        // Hollywood Cerise
  'rgba(156, 39, 176, 1)',      // Purple
  'rgba(103, 58, 183, 1)',      // Indigo
  'rgba(67, 160, 71, 1)',       // Green
  'rgba(33, 150, 243, 1)',      // Blue
  'rgba(0, 188, 212, 1)',       // Cyan
  'rgba(255, 193, 7, 1)',       // Amber
  'rgba(255, 87, 34, 1)'        // Deep Orange
        ],
        
        
        
        borderWidth: 2,
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    const newChartInstance = new Chart(canvasRef.current, {
      type: 'pie',
      data: chartData,
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
    chartRef.current = newChartInstance;
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [tokenDistribution]);

  return (
    <div className="tokenomics">
      <div className="hero-banner-tokenomics" style={{ backgroundImage: `url(${heroBanner})` }}>
        <h1>Tokenomics</h1>
        <p>3NS.ai Token strategically distributes tokens to key stakeholders, ensuring balanced allocation and 
          long-term sustainability. This approach fosters community engagement and supports continuous innovation and growth.</p>
      </div>
      <div className="tokenomics-details">
        <div className="tokenomics-layout">
          <div className="token-info">
            <h2>Token Information</h2>
            <ul>
              <li><strong>Token Name:</strong> Cap Token</li>
              <li><strong>Token Symbol:</strong> CAP</li>
              <li><strong>Total Supply: </strong> 1,000,000,000 CAP  (1 Billion)</li>
              <li><strong>Contract Address::</strong> 0x262af224412b508A66B3a728fD22d8DBA1d7aC92</li>
              <li><strong>Type:</strong> ERC20</li>
              <li><strong>Blockchain:</strong> Arbitrium</li>
              <li><strong>Blockchain Explorer:</strong> <a href="https://arbiscan.io/token/0x262af224412b508A66B3a728fD22d8DBA1d7aC92" target="_blank" rel="noopener noreferrer">Click here</a></li>
              
            </ul>
          </div>
          <div className="chart-container">
            <canvas ref={canvasRef} />
          </div>
          <div className="chart-legend">
            <h2>Key</h2>
            <ul>
              {chartData.labels.map((label, index) => (
                <li key={index}>
                  <span className="legend-color" style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}></span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
     {/* <div className="additional-info">
        <h3>3NS.ai Data</h3>
        <ul>
          <li><strong>Tokens:</strong> 200,000,000</li>
          <li><strong>NFT Land Plots:</strong> 200,000,000</li>
          <li><strong>Metaverse Stores:</strong> 50,000</li>
          <li><strong>Media Cubez:</strong> 10,000</li>
        </ul>
      </div>*/}
    </div>
  );
};

export default Tokenomics;
