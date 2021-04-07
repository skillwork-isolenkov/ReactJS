import AppRouter from "./AppRouter";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
