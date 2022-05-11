import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import CardContainer from './components/CardContainer';
import { useEffect, useState } from 'react';
import Card from './components/Card';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  
  const myAgentProfiles = 
  {
    astra: {
      imageAlt: 'Astra',
      imageSrc: '../assets/astra.png',
      isSelected: false,
    },
    breach: {
      imageAlt: 'Breach',
      imageSrc: '../assets/breach.png',
      isSelected: false,
    },
    brimstone: {
      imageAlt: 'Brimstone',
      imageSrc: '../assets/brimstone.png',
      isSelected: false,
    },
    chamber: {
      imageAlt: 'Chamber',
      imageSrc: '../assets/chamber.png',
      isSelected: false,
    },
    cypher: {
      imageAlt: 'Cypher',
      imageSrc: '../assets/cypher.png',
      isSelected: false,
    },
  }

const [profile, setProfile] = useState(myAgentProfiles);

  function handleIncrementScore(e) {
    const name = e.target.name;

    setCurrentScore(currentScore + 1);
    setBestScore(bestScore + 1);

    const myUpdatedProfile = {...profile};
    myUpdatedProfile[name].isSelected = true;
    console.log(myUpdatedProfile);

    setProfile(myUpdatedProfile);

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
        // myCards={cardArray}
        incrementScore={handleIncrementScore}
        agentProfiles={profile}
      />
    </div>
  );
}

export default App;
