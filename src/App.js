import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import CardContainer from './components/CardContainer';
import { useState } from 'react';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleIncrementScore = () => {
    setCurrentScore(currentScore + 1);
    setBestScore(bestScore + 1);
  }

  return (
    <div className="App">
      <Header title='Memory Card Game'/>
      {/* scores are state values */}
      <Scoreboard 
        currentScore={currentScore} 
        bestScore={bestScore} 
      />
      <CardContainer
        incrementScore={handleIncrementScore}
      />
    </div>
  );
}

export default App;
