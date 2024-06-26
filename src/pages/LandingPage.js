import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LandingPage.css';

const LandingPage = () => {
  const [analyses, setAnalyses] = useState([]);

  useEffect(() => {
    const fetchAnalyses = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/recent-analyses');
        setAnalyses(response.data);
      } catch (error) {
        console.error('Error fetching analyses:', error);
      }
    };

    fetchAnalyses();
  }, []);

  return (
    <div>
      <h1>Recent Analyses</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Project/Token Name</th>
            <th>Symbol</th>
            <th>Contract Address</th>
            <th>Blockchain</th>
            <th>Volume</th>
            <th>Marketcap</th>
            <th>Liquidity</th>
            <th>Website</th>
            <th>Analysis Score</th>
          </tr>
        </thead>
        <tbody>
          {analyses.map((analysis) => (
            <tr key={analysis._id}>
              <td>{analysis._id}</td>
              <td>{analysis.name}</td>
              <td>{analysis.symbol}</td>
              <td>{analysis.contractAddress}</td>
              <td>{analysis.blockchain}</td>
              <td>{analysis.volume}</td>
              <td>{analysis.marketcap}</td>
              <td>{analysis.liquidity}</td>
              <td>{analysis.website}</td>
              <td>{analysis.analysisScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LandingPage;
