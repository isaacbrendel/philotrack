import React, { useState, useEffect } from 'react';
import { TypographyStyle, GoogleFont } from 'react-typography';
import typography from './typography';
import LandingPage from './components/LandingPage';
import GoalTable from './components/GoalTable';
import SummarySubmitForm from './components/SummarySubmitForm';
import './App.css';
import './index.css';

function App() {
  const [summaries, setSummaries] = useState({});

  useEffect(() => {
    const savedSummaries = localStorage.getItem('summaries');
    if (savedSummaries) {
      setSummaries(JSON.parse(savedSummaries));
    }
  }, []);

  const handleSubmitSummary = (day, summary) => {
    const updatedSummaries = { ...summaries, [day]: summary };
    setSummaries(updatedSummaries);
    localStorage.setItem('summaries', JSON.stringify(updatedSummaries));
  };

  return (
    <div className="App">
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <LandingPage />
      <GoalTable summaries={summaries} />
      <SummarySubmitForm onSubmit={handleSubmitSummary} />
    </div>
  );
}

export default App;