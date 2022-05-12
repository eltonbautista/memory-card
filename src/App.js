import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import CardContainer from './components/CardContainer';
import { useEffect, useState } from 'react';
import factoryFunctionAgent from './modules/factoryFunctionAgent';

function App() {
  // State for keeping track of my scores
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  
  // State for my agent profiles utilizing a factory function
  const myAgentProfiles = 
  {
    astra: factoryFunctionAgent('astra', '', false),
    breach: factoryFunctionAgent('breach', '', false),
    brimstone: factoryFunctionAgent('brimstone', '', false),
    chamber: factoryFunctionAgent('chamber', '', false),
    cypher: factoryFunctionAgent('cypher', '', false),
  }
  const [profile, setProfile] = useState(myAgentProfiles);

  // an effect that checks if all agent isSelected is 'true';

  useEffect(() => {
    const [...myAgents] = document.querySelectorAll('.agent');
    const booleanArray = [];
    const checkIfAllTrue = (bool) => bool === 'true';

    myAgents.forEach((agent) => {
      booleanArray.push(agent.dataset.selected);
    })
    
    if (booleanArray.every(checkIfAllTrue)) {
      console.log('game over');
    }
  }, [profile])

  // My onClick function that is passed down to my cards
  // It increments score, as well as changes the card's data-selected attribute to true
  // Utilizes a public method for security purposes

  function handleIncrementScore(e) {
    // alt is used for object property accessing via square brack notation
    const alt = e.target.alt;
    
    if (e.target.dataset.selected === 'false') {
      setCurrentScore(currentScore + 1);
      setBestScore(bestScore + 1);

    // A deep copy of profile is created
    // The deep copy changes the appropriate agent's isSelected prop to true
    // The deep copy is passed into profile as the new state

      const myUpdatedProfile = {...profile};
      myUpdatedProfile[alt].isSelectedTrue();
  
      setProfile(myUpdatedProfile);
    }
    // console.log('lose function here');

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
        agentProfiles={profile}
      />
    </div>
  );
}

export default App;
