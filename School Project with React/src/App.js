import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import AppRouter from "./AppRouter";

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
