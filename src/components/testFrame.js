import React, { Component } from 'react';
import TaskMaker from './taskMaker';

class TestFrame extends Component {
  render() {
    return (
      <div className="TestFrame">
        <header>
          <p>FOR DEVELOPERS</p>
          <TaskMaker />
        </header>
      </div>
    );
  }
}

export default TestFrame;
