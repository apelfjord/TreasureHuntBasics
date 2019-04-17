import React, { Component } from 'react';
import FullHunt from './components/fullHunt';
import TestFrame from './components/testFrame';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <TestFrame />
        <header className="App-header">
          <FullHunt/>
        </header>
      </div>
    );
  }
}

export default App;