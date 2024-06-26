// frontend/src/components/AnalysisResult.js
import React from 'react';

const AnalysisResult = ({ analysis }) => {
  return (
    <div>
      <h2>AI Analysis Result</h2>
      <p>{analysis}</p>
    </div>
  );
};

export default AnalysisResult;
