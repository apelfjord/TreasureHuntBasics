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
        <button onClick={Read}>Print task data to log</button>
        <button type="button" id="fetch" onClick={Write}>Add new mock question <br/>(requires page refresh)</button>
        </div>
      )
    }
  }
  
  export default TaskMaker;