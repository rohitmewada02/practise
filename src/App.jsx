import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="toggle-btn"
      >
        {darkMode ? "Switch to Light" : "Switch to Dark"}
      </button>
    </div>
  );
}

export default App;
