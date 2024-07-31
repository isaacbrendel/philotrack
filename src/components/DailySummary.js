import React, { useState } from 'react';

const DailySummary = ({ updateProgress, updateDailySummary }) => {
  const [day, setDay] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProgress(prev => prev + 1);
    updateDailySummary(day, summary);
    setDay('');
    setSummary('');
  };

  return (
    <div className="daily-summary">
      <h2>Daily Summary</h2>
      <form onSubmit={handleSubmit}>
        <select 
          value={day} 
          onChange={(e) => setDay(e.target.value)}
          required
        >
          <option value="">Select Day</option>
          {[...Array(19)].map((_, i) => (
            <option key={i} value={i + 1}>Day {i + 1}</option>
          ))}
        </select>
        <textarea 
          value={summary} 
          onChange={(e) => setSummary(e.target.value)} 
          placeholder="Enter your daily summary..."
          required
        />
        <button type="submit">Confirm Goal & Save Summary</button>
      </form>
    </div>
  );
};

export default DailySummary;