import React from 'react';

const SummaryCard = ({ summary, onClose }) => {
  return (
    <div className="summary-card-overlay">
      <div className="summary-card">
        <h3>{summary.focus}</h3>
        <p><strong>Pages:</strong> {summary.pages}</p>
        <p>{summary.summary}</p>
        <p><em>Date: {summary.date}</em></p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SummaryCard;