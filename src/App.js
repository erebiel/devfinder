import React from "react"
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Main from "./components/Main";


export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  const styles = darkMode ? {
    backgroundColor: '#141D2F',
    color: '#FFFFFF'
  } : {
    backgroundColor: '#f6f8ff',
    color: '#222731'
  }



  return (
    <div className="app" style={styles}>
      <div className="devfinder">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <SearchBar darkMode={darkMode} />
        <Main darkMode={darkMode} />
      </div>
    </div>
  );
}
