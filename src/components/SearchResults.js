import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SearchResults.css';

const SearchResults = ({ location }) => {
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/search?query=${query}`);
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <div className="search-results">
      <h1>Search Results for "{query}"</h1>
      {results.length > 0 ? (
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
            {results.map((result) => (
              <tr key={result._id} onClick={() => window.location.href = `/analysis/${result._id}`}>
                <td>{result._id}</td>
                <td>{result.name}</td>
                <td>{result.symbol}</td>
                <td>{result.contractAddress}</td>
                <td>{result.blockchain}</td>
                <td>{result.volume}</td>
                <td>{result.marketcap}</td>
                <td>{result.liquidity}</td>
                <td><a href={result.website} target="_blank" rel="noopener noreferrer">{result.website}</a></td>
                <td>{result.analysisScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
