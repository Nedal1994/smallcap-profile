// frontend/src/components/Analysis.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Analysis = () => {
  const location = useLocation();
  const [analysisArray,setAnalysisArray] = useState([]);
  const { analysis } = location.state || { analysis: null };
 // const [analysis, setAnalysis] = useState(null);
 /*  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/analysis/${id}`);
        //setAnalysis(response.data);
      } catch (error) {
        console.error('Error fetching analysis:', error);
      }
    };

    fetchAnalysis();
  }, [id]); */

  useEffect(() => {
    if(analysis){
      const linesArr = analysis.split(/(?<=\.) (?=\d)|(?<=\.) /); // Split before digits followed by a dot
      

      console.log(linesArr)
      setAnalysisArray(linesArr)
    }
  },[analysis])

  if (!analysis) return <div>Loading...</div>;

  return (
  /*   <div>
      <h1>{analysis.name} ({analysis.symbol})</h1>
      <p>Contract Address: {analysis.contractAddress}</p>
      <p>Blockchain: {analysis.blockchain}</p>
      <p>Volume: {analysis.volume}</p>
      <p>Marketcap: {analysis.marketcap}</p>
      <p>Liquidity: {analysis.liquidity}</p>
      <p>Website: <a href={analysis.website} target="_blank" rel="noopener noreferrer">{analysis.website}</a></p>
      <p>Analysis Score: {analysis.analysisScore}</p>
    </div> */
    <div>
      <h1 style={{marginTop:"100px"}} >Analysis</h1>
      {analysisArray ? analysisArray.map((line) => (
        <div style={{marginTop:"10px"}} >
          <>{line}</> 
        </div>
      ) ): (
        <p>No analysis data available.</p>
      )}
    </div>
  );
};

export default Analysis;
