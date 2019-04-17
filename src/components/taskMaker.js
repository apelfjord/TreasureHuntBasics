import React, { Component } from 'react';
import {GetTaskData, addQuestion} from '../taskHandler';

class TaskMaker extends Component {
  render() {
    
    
    const Write = () => {
        addQuestion();
    }  
    const Read = () => {
        GetTaskData('8663');
    }  
    return (
        <div className="TaskMaker">
        <button onClick={Read}>Fetch data to log</button>
        <button type="button" id="fetch" onClick={Write}>Add new question</button>
        </div>
      )
    }
  }
  
  export default TaskMaker;