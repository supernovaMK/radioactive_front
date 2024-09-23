import React from 'react';
function AnalysisResult({ analysis }) {
  return (
    <div className="card-container">
      {analysis && analysis.length > 0 ? (
        analysis.map((result, index) => (
          <div className="card" key={index}>
            <h3>{result.name}</h3>
            <p>Percentage: {result.percentage}%</p>
          </div>
        ))
      ) : (
        <div className="card">
          <p>No results to display</p>
        </div>
      )}
    </div>
  );
}

export default AnalysisResult;
