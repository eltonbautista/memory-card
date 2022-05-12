import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Scoreboard from './components/Scoreboard';
import CardContainer from './components/CardContainer';

import { useEffect, useState } from 'react';
import factoryFunctionAgent from './modules/factoryFunctionAgent';

function App() {

  // State for keeping track of my scores
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  
  // State for my agent profiles utilizing a factory function
  // LOL added a Yoru clone
  const myAgentProfiles = 
  {
    astra: factoryFunctionAgent('astra', false),
    breach: factoryFunctionAgent('breach', false),
    brimstone: factoryFunctionAgent('brimstone', false),
    chamber: factoryFunctionAgent('chamber', false),
    cypher: factoryFunctionAgent('cypher', false),
    fade: factoryFunctionAgent('fade', false),
    jett: factoryFunctionAgent('jett', false),
    kayo: factoryFunctionAgent('kayo', false),
    killjoy: factoryFunctionAgent('killjoy', false),
    neon: factoryFunctionAgent('neon', false),
    omen: factoryFunctionAgent('omen', false),
    phoenix: factoryFunctionAgent('phoenix', false),
    raze: factoryFunctionAgent('raze', false),
    reyna: factoryFunctionAgent('reyna', false),
    sage: factoryFunctionAgent('sage', false),
    skye: factoryFunctionAgent('skye', false),
    sova: factoryFunctionAgent('sova', false),
    viper: factoryFunctionAgent('viper', false),
    yoru: factoryFunctionAgent('yoru', false),
    yoruclone: factoryFunctionAgent('yoruclone', false),
  }
  const [profile, setProfile] = useState(myAgentProfiles);

  // an effect that checks if all agent isSelected is 'true';

  useEffect(() => {

    const localBestScore = localStorage.getItem('localBestScore');
    if (!localStorage.getItem('localBestScore')) {
      localStorage.setItem('localBestScore', 0);
    }

  // Conditional to display user's highest achieved score.
    if (localBestScore > currentScore) {
      setBestScore(localBestScore);
    } else if (localBestScore < currentScore) {
      localStorage.setItem('localBestScore', currentScore);
      setBestScore(localStorage.getItem('localBestScore'));
    }

    const myAgents = [...document.querySelectorAll('.agent')];
    const booleanArray = [];
    const checkIfAllTrue = (bool) => bool === 'true';

    myAgents.forEach((agent) => {
      booleanArray.push(agent.dataset.selected);
    })
    
    if (booleanArray.every(checkIfAllTrue)) {
      console.log('game over');
    }
  }, [bestScore, currentScore])

  // My onClick function that is passed down to my cards
  // It increments score, as well as changes the card's data-selected attribute to true
  // Utilizes a public method for security purposes
  function handleIncrementScore(e) {
    
    // alt is used for object property accessing via square brack notation
    const alt = e.target.alt;


    if (e.target.dataset.selected === 'false') {

      setCurrentScore(currentScore + 1);

    // A deep copy of profile is created
    // The deep copy changes the appropriate agent's isSelected prop to true
    // The deep copy is passed into profile as the new state
      const myUpdatedProfile = {...profile};
      myUpdatedProfile[alt].isSelectedTrue();
  
      setProfile(myUpdatedProfile);
    } else if (e.target.dataset.selected === 'true') {
      // If the user clicks on an agent they have clicked on before (isSelected === 'true')
      // Then currentScore is turned back to 0, and profile is set back to default!!
      setCurrentScore(0);
      setProfile(myAgentProfiles);
    }

  }

  return (
    <div className="App">
      <Header title="Valorant Memory Card Game"/>
      {/* scores are state values */}
      <Scoreboard 
        currentScore={currentScore} 
        bestScore={bestScore} 
      />
      <CardContainer
        incrementScore={handleIncrementScore}
        agentProfiles={profile}
      />
      <Footer title="A rendition of the popular game: Memory Card, the theme is from the popular game Valorant by Riot Games" />
    </div>
  );
}

export default App;
