import logo from './logo.svg';
import './App.css';

const mapable = [
  'work',
  'hunt',
  'sleep',
  'code',
  'drink coffee'
]

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {mapable.map( el=> task(el))}
      </header>
    </div>
  );
}

export default App;
