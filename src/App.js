import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';


function App() {
  return (
    <div className="App">
      <Header title='Memory Card Game'/>
      {/* scores are state values */}
      <Scoreboard currentScore={0} bestScore={0} />
    </div>
  );
}

export default App;
