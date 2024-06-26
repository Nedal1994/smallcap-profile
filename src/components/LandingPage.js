import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LandingPage.css';

const LandingPage = () => {
  const [analyses, setAnalyses] = useState([]);
  const [filteredAnalyses, setFilteredAnalyses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState('analysisScore');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    const fetchAnalyses = async () => {
      try {
        // Dummy data to simulate API response
        const dummyData = [
          { _id: '1', name: 'Token A', symbol: 'TKA', contractAddress: '0x123', blockchain: 'Ethereum', volume: 1000, marketcap: 5000, liquidity: 2000, website: 'https://tokena.com', analysisScore: 85 },
          { _id: '2', name: 'Token B', symbol: 'TKB', contractAddress: '0x456', blockchain: 'Binance Smart Chain', volume: 2000, marketcap: 10000, liquidity: 4000, website: 'https://tokenb.com', analysisScore: 90 },
          { _id: '3', name: 'Token C', symbol: 'TKC', contractAddress: '0x789', blockchain: 'Polygon', volume: 1500, marketcap: 7500, liquidity: 3000, website: 'https://tokenc.com', analysisScore: 80 },
            
          { _id: '1', name: 'Token A', symbol: 'TKA', contractAddress: '0x123', blockchain: 'Ethereum', volume: 1000, marketcap: 5000, liquidity: 2000, website: 'https://tokena.com', analysisScore: 85 },
          { _id: '2', name: 'Token B', symbol: 'TKB', contractAddress: '0x456', blockchain: 'Binance Smart Chain', volume: 2000, marketcap: 10000, liquidity: 4000, website: 'https://tokenb.com', analysisScore: 90 },
          { _id: '3', name: 'Token C', symbol: 'TKC', contractAddress: '0x789', blockchain: 'Polygon', volume: 1500, marketcap: 7500, liquidity: 3000, website: 'https://tokenc.com', analysisScore: 80 },

          { _id: '1', name: 'Token A', symbol: 'TKA', contractAddress: '0x123', blockchain: 'Ethereum', volume: 1000, marketcap: 5000, liquidity: 2000, website: 'https://tokena.com', analysisScore: 85 },
          { _id: '2', name: 'Token B', symbol: 'TKB', contractAddress: '0x456', blockchain: 'Binance Smart Chain', volume: 2000, marketcap: 10000, liquidity: 4000, website: 'https://tokenb.com', analysisScore: 90 },
          { _id: '3', name: 'Token C', symbol: 'TKC', contractAddress: '0x789', blockchain: 'Polygon', volume: 1500, marketcap: 7500, liquidity: 3000, website: 'https://tokenc.com', analysisScore: 80 },

          { _id: '1', name: 'Token A', symbol: 'TKA', contractAddress: '0x123', blockchain: 'Ethereum', volume: 1000, marketcap: 5000, liquidity: 2000, website: 'https://tokena.com', analysisScore: 85 },
          { _id: '2', name: 'Token B', symbol: 'TKB', contractAddress: '0x456', blockchain: 'Binance Smart Chain', volume: 2000, marketcap: 10000, liquidity: 4000, website: 'https://tokenb.com', analysisScore: 90 },
          { _id: '3', name: 'Token C', symbol: 'TKC', contractAddress: '0x789', blockchain: 'Polygon', volume: 1500, marketcap: 7500, liquidity: 3000, website: 'https://tokenc.com', analysisScore: 80 },

          { _id: '1', name: 'Token A', symbol: 'TKA', contractAddress: '0x123', blockchain: 'Ethereum', volume: 1000, marketcap: 5000, liquidity: 2000, website: 'https://tokena.com', analysisScore: 85 },
          { _id: '2', name: 'Token B', symbol: 'TKB', contractAddress: '0x456', blockchain: 'Binance Smart Chain', volume: 2000, marketcap: 10000, liquidity: 4000, website: 'https://tokenb.com', analysisScore: 90 },
          { _id: '3', name: 'Token C', symbol: 'TKC', contractAddress: '0x789', blockchain: 'Polygon', volume: 1500, marketcap: 7500, liquidity: 3000, website: 'https://tokenc.com', analysisScore: 80 },

          { _id: '1', name: 'Token A', symbol: 'TKA', contractAddress: '0x123', blockchain: 'Ethereum', volume: 1000, marketcap: 5000, liquidity: 2000, website: 'https://tokena.com', analysisScore: 85 },
          { _id: '2', name: 'Token B', symbol: 'TKB', contractAddress: '0x456', blockchain: 'Binance Smart Chain', volume: 2000, marketcap: 10000, liquidity: 4000, website: 'https://tokenb.com', analysisScore: 90 },
          { _id: '3', name: 'Token C', symbol: 'TKC', contractAddress: '0x789', blockchain: 'Polygon', volume: 1500, marketcap: 7500, liquidity: 3000, website: 'https://tokenc.com', analysisScore: 80 },

          { _id: '1', name: 'Token A', symbol: 'TKA', contractAddress: '0x123', blockchain: 'Ethereum', volume: 1000, marketcap: 5000, liquidity: 2000, website: 'https://tokena.com', analysisScore: 85 },
          { _id: '2', name: 'Token B', symbol: 'TKB', contractAddress: '0x456', blockchain: 'Binance Smart Chain', volume: 2000, marketcap: 10000, liquidity: 4000, website: 'https://tokenb.com', analysisScore: 90 },
          { _id: '3', name: 'Token C', symbol: 'TKC', contractAddress: '0x789', blockchain: 'Polygon', volume: 1500, marketcap: 7500, liquidity: 3000, website: 'https://tokenc.com', analysisScore: 80 },

          { _id: '1', name: 'Token A', symbol: 'TKA', contractAddress: '0x123', blockchain: 'Ethereum', volume: 1000, marketcap: 5000, liquidity: 2000, website: 'https://tokena.com', analysisScore: 85 },
          { _id: '2', name: 'Token B', symbol: 'TKB', contractAddress: '0x456', blockchain: 'Binance Smart Chain', volume: 2000, marketcap: 10000, liquidity: 4000, website: 'https://tokenb.com', analysisScore: 90 },
          { _id: '3', name: 'Token C', symbol: 'TKC', contractAddress: '0x789', blockchain: 'Polygon', volume: 1500, marketcap: 7500, liquidity: 3000, website: 'https://tokenc.com', analysisScore: 80 },

        ];
        setAnalyses(dummyData);
        setFilteredAnalyses(dummyData);

        // Uncomment below lines to fetch data from API
        // const response = await axios.get('http://localhost:8000/api/recent-analyses');
        // setAnalyses(response.data);
        // setFilteredAnalyses(response.data);
      } catch (error) {
        console.error('Error fetching analyses:', error);
      }
    };

    fetchAnalyses();
  }, []);

  useEffect(() => {
    const filtered = analyses.filter(analysis => 
      analysis.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAnalyses(filtered);
  }, [searchTerm, analyses]);

  const handleSort = (key) => {
    const order = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(order);
    const sorted = [...filteredAnalyses].sort((a, b) => {
      if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
      return 0;
    });
    setFilteredAnalyses(sorted);
  };

  return (
    <div className="landing-page">
      <h1>Recent Analysis</h1>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search by project/token name..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('_id')}>ID</th>
            <th onClick={() => handleSort('name')}>Project/Token Name</th>
            <th onClick={() => handleSort('symbol')}>Symbol</th>
            <th onClick={() => handleSort('contractAddress')}>Contract Address</th>
            <th onClick={() => handleSort('blockchain')}>Blockchain</th>
            <th onClick={() => handleSort('volume')}>Volume</th>
            <th onClick={() => handleSort('marketcap')}>Marketcap</th>
            <th onClick={() => handleSort('liquidity')}>Liquidity</th>
            <th>Website</th>
            <th onClick={() => handleSort('analysisScore')}>Analysis Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredAnalyses.map((analysis) => (
            <tr key={analysis._id} onClick={() => window.location.href = `/analysis/${analysis._id}`}>
              <td>{analysis._id}</td>
              <td>{analysis.name}</td>
              <td>{analysis.symbol}</td>
              <td>{analysis.contractAddress}</td>
              <td>{analysis.blockchain}</td>
              <td>{analysis.volume}</td>
              <td>{analysis.marketcap}</td>
              <td>{analysis.liquidity}</td>
              <td><a href={analysis.website} target="_blank" rel="noopener noreferrer">{analysis.website}</a></td>
              <td>{analysis.analysisScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => window.location.href = '/more-analyses'}>View More</button>
    </div>
  );
};

export default LandingPage;
