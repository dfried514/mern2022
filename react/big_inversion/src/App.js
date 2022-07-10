import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Mary" lastName="Wilson" age={58} hairColor="violet" />
      <PersonCard firstName="Tom" lastName="Frey" age={71} hairColor="grey" />
      <PersonCard firstName="Bobby" lastName="Stevens" age={36} hairColor="brown" />
      <PersonCard firstName="Phil" lastName="Dickens" age={43} hairColor="black" />
    </div>
  );
}

export default App;
