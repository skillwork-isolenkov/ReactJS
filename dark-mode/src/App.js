import { useState } from "react";
import * as FaIcons from 'react-icons/fa'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className="container">
        <span style={{ color: darkMode ? 'grey' : 'yellow' }}><FaIcons.FaSun /></span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"></span>
          </label>
        </div>
        <span style={{ color: darkMode ? '#c96dfd' : 'grey' }}><FaIcons.FaMoon /></span>
      </div>
    </div>
  );
}

export default App;
