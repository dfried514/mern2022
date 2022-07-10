import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Mark" lastName="Freed" age={43} hairColor="brown" />
      <PersonCard firstName="Jim" lastName="Hall" age={52} hairColor="black" />
      <PersonCard firstName="Mike" lastName="Toni" age={35} hairColor="blond" />
      <PersonCard firstName="Gail" lastName="Frank" age={32} hairColor="red" />
    </div>
  );
}
export default App;
