import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import CardContainer from './components/CardContainer';

function App() {
  return (
    <div className="App">
      <Header title='Memory Card Game'/>
      {/* scores are state values */}
      <Scoreboard currentScore={0} bestScore={0} />
      <CardContainer />
    </div>
  );
}

export default App;
