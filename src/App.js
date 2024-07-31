import React from 'react';
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from './utils/typography'
import LandingPage from './components/LandingPage';
import GoalTable from './components/GoalTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <LandingPage />
      <GoalTable />
    </div>
  );
}

export default App;