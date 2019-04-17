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
            this.GetOneHunt().then(() => console.log(this.state))
        }
        return (
          <div className="Hunt">
            <div className="Task">
                <header className="infobar">
                <h2>{this.state.name}</h2>
                <p><i>Added {this.state.dateAdded}</i></p>
                <p>{this.state.description}</p>
                <p><b>{this.state.tasks.length}</b> tasks</p>
                </header>
                <button>Start hunt </button>
            </div>
          </div>
        )
      }
    }

export default Hunt;