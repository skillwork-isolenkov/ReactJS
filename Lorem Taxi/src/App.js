import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation";
import Services from "./Components/Services/Services";
import News from "./Components/News/News";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Services />
      <News />
    </div>
  );
}

export default App;
