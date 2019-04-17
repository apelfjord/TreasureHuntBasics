import React, { Component } from 'react';
import FullHunt from './components/fullHunt';
import TaskMaker from './components/taskMaker';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <TaskMaker/>
          <FullHunt/>
        </header>
      </div>
    );
  }
}

export default App;