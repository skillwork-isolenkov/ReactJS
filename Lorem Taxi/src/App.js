import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation";
import Services from "./Components/Services/Services";
import News from "./Components/News/News";
import Client from "./Components/Client/Client";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Services />
      <News />
      <Client />
    </div>
  );
}

export default App;
