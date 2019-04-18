import React, { Component } from 'react';
import {FetchHuntData} from '../taskHandler';

const initialState = {
    "id": '',
      "name": '',
      "description": '',
      "dateAdded": '',
      "open": '',
      "tasks": [],
      "huntCompleted": '',
      "actualTask": ''
    }

class Hunt extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;
    }

    GetOneHunt = async (id = 5538) => {
        await FetchHuntData(id)
            .then((data) => this.setState(data[0]));
    }
    
    render() {
        if (!this.state.id) {
            this.GetOneHunt()
        }
        return (
          <div className="Hunt">
            <div className="Hunt_frame">
                <header className="infobar">
                <h2 className="huntHeader">{this.state.name}</h2>
                <p className="date"><i>Added {this.state.dateAdded}</i></p>
                <p className="description">{this.state.description}</p>
                <p className="nmbrTasks"><b>{this.state.tasks.length}</b> tasks</p>
                </header>
            </div>
                <button className="startHunt">Start hunt </button>
          </div>
        )
      }
    }

export default Hunt;