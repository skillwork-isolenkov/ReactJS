import './App.css';
import rerender from './index';

let counter = 0;
const incrementCounter = () => {
  counter++
  rerender(App(), document.getElementById('root'));
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {counter}
        <button onClick={incrementCounter}>Click</button>
      </header>
    </div>
  );
}

export default App;
