import React, { Component } from 'react';
import {FetchHuntData} from '../taskHandler';
import Task from './task';

const initialState = {
  hunt: {
    "id": '',
    "name": '',
    "description": '',
    "dateAdded": '',
    "open": '',
    "tasks": [],
  }
}

class FullHunt extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  printFromDb = async () => {
      await FetchHuntData(5538) 
        .then((huntObj) => this.setState({hunt: huntObj[0]}))
  }

  render() {
    if (!this.state.hunt.id) {
      this.printFromDb();
    }
    const PrintTasks = () => {
            const taskCard = [];
            for (let i = 0; i < this.state.hunt.tasks.length; i++) {
                taskCard.push(<Task 
                    key={i} 
                    number={i + 1} 
                    id={this.state.hunt.tasks[i]} 
                    actual={this.state.hunt.actualTask}
                  />);
            }
            return taskCard;
        }
        return (
          <div className="FullHunt">
          <h3>{this.state.hunt.name}</h3>
          <PrintTasks/>
          </div>
        )
      }
    }

export default FullHunt;