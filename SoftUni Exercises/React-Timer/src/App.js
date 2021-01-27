import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="App-title">{new Date(Date.now()).toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
