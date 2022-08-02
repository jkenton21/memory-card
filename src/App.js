//App.js
// Main App component for importing/rendering the other components
import React from 'react';
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Memory Game!
      </header>
      <Scoreboard />
      <footer className="App-footer">
        by jkenton21
      </footer>
    </div>
  );
}

export default App;
