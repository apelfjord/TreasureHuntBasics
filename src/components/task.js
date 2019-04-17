import React, { Component } from 'react';
import {FetchTaskData} from '../taskHandler';
import ExampleImage from '../assets/images/pic1.png';

const initialState =  {
    "id": '',
    "parentId": '',
    "task": {
        "title": 'Loading question ...',
        "pic": false,
        "pic_src": null,
        "answers": {
            "clickableList": [],
            "correctAnswer": ''
    },
    "correct": ''
    }
}

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    
    submit(answer) {
        const dummyTask = {...this.state.task};
        if (answer === dummyTask.answers.correctAnswer) {
            dummyTask.correct = true;
        } else {
            dummyTask.correct = false;
        }
        dummyTask.answers.clickableList = [];
        this.setState({
            task: dummyTask
        });
    }

    printFromDb = async () => {
            await FetchTaskData(this.props.id)
                .then((taskObj) => this.setState(taskObj))
    }
    
    render() {
        if (!this.state.id) {
            this.printFromDb();
        }

        const statePath = this.state.task;
        let answers = []
        let correct = ''
        let visualDisplayer = ''

        if (statePath.pic) {
            visualDisplayer = <img alt='' src={ExampleImage} width="100%"></img>
        }

        if (this.state.task.answers.clickableList.length === 0) {
            if(this.state.task.correct) {
                visualDisplayer = <span role="img" class="emoji" aria-label="jsx-a11y/accessible-emoji">👍</span>;
                
            } else {
                visualDisplayer = <span role="img" class="emoji" aria-label="jsx-a11y/accessible-emoji">💩</span>;
                }
            }

            for (let i = 0; i < this.state.task.answers.clickableList.length; i++) {
                answers.push(<li key={i}><button onClick={() => this.submit(this.state.task.answers.clickableList[i])}>
                {this.state.task.answers.clickableList[i]}</button></li>);
            }


            return(
                <div className = "Task" >
                <header className="infobar">
            <p><b>{this.state.task.title}</b></p>
                </header>
                {visualDisplayer}
            <ul>
                {answers}
                {correct}
            </ul>
        </div>
        );
    }
}

export default Task;