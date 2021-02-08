import Navigation from '../Components/Navigation/Navigation'
import Aside from '../Components/Aside/Aside'
import Main from '../Components/Main/Main'
import Posts from '../Components/Posts/Posts'
import Footer from '../Components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />

      <div className="Container">
        <Aside />
        <Main title='Hello'>
          <Posts />
        </Main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
