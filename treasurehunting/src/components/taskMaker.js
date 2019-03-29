import React, { Component } from 'react';
import {GetTaskData, InsertID} from './taskHandler';

class TaskMaker extends Component {
  render() {
    const Write = () => {
      console.log(InsertID(5538));
    }  
    const Read = () => {
      console.log(GetTaskData('8663'));
    }  
    return (
        <div className="TaskMaker">
        <button onClick={Read}>Fetch data to log</button>
        <button onClick={Write}>Post new Data</button>
        </div>
      )
    }
  }


export default TaskMaker;