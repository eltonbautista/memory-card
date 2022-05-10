import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import CardContainer from './components/CardContainer';
import { useState } from 'react';
import Card from './components/Card';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const cardArray = 
  [
  <Card incrementScore={handleIncrementScore} imageAlt='Astra' imageSrc={require('./assets/astra.png')} />,
  <Card incrementScore={handleIncrementScore} imageAlt='Breach' imageSrc={require('./assets/breach.png')} />,
  <Card incrementScore={handleIncrementScore} imageAlt='Brimstone' imageSrc={require('./assets/brimstone.png')} />,
  <Card incrementScore={handleIncrementScore} imageAlt='Chamber' imageSrc={require('./assets/chamber.png')} />,
  <Card incrementScore={handleIncrementScore} imageAlt='Cypher' imageSrc={require('./assets/cypher.png')} />
  ];

  // logic for incrementing score

  function handleIncrementScore() {
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
        myCards={cardArray}
      />
    </div>
  );
}

export default App;
