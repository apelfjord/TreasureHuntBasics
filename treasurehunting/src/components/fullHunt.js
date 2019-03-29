import React, { Component } from 'react';
import {FetchHuntData} from './taskHandler';
import Task from './task';

const huntDb = FetchHuntData(5538);

class FullHunt extends Component {
  constructor(props) {
    super(props);
    this.state = {hunt: huntDb}
  }
  
  render() {

    const PrintTasks = () => {
            const returnArray = [];
            for (let i = 0; i < this.state.hunt.tasks.length; i++) {
                returnArray.push(<Task key={i} number={i + 1} 
                  id={this.state.hunt.tasks[i]} actual={this.state.hunt.actualTask}/>);
            }
            return returnArray;
        }
        return (
        <div className="FullHunt">
        <h3>{this.state.hunt.name}</h3>
        <PrintTasks/>
        </div>
      )
    }
  }

export const PrintScore = (score) => {
  console.log('Current score: ' + score + '/' + huntDb.tasks.length);
  if (score === huntDb.tasks.length) {
    console.log('You answered all the questions correctly! You can go to the bank and get your reward in cash.')
}
}
export default FullHunt;