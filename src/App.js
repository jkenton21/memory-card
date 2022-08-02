import logo from './logo.svg';
import './App.css';
import React from 'react';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Memory Game!
      </header>
      <Scoreboard />
      <Gameboard />
      <footer className="App-footer">
        by jkenton21
      </footer>
    </div>
  );
}

export default App;
