import React, { Component } from 'react';
// import {WriteHuntData} from './taskHandler';
import TaskMaker from './taskMaker';

class MakeNewHunt extends Component {
    render() {
        return (
        <div className="MakeNewHunt">
        <TaskMaker/>
        </div>
      )
    }
  }


export default MakeNewHunt;