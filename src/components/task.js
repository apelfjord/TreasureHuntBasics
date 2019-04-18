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
    
    Submit(answer) {
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

    PrintFromDb = async () => {
            await FetchTaskData(this.props.id)
                .then((taskObj) => this.setState(taskObj))
    }

    RandomizeOrderOf = (array) => {
        return array.sort(() => {
            return 0.5 - Math.random()
        })
    }
    
    render() {
        if (!this.state.id) {
            this.PrintFromDb();
        }

        const statePath = this.state.task;
        let answers = []
        let correct = ''
        let visualDisplayer = ''

        if (statePath.pic) {
            visualDisplayer = <center><img alt='' src={ExampleImage}/></center>
        }

        if (this.state.task.answers.clickableList.length === 0) {
            if(this.state.task.correct) {
                visualDisplayer = <span role="img" className="emoji" aria-label="jsx-a11y/accessible-emoji">👍</span>;
                
            } else {
                visualDisplayer = <span role="img" className="emoji" aria-label="jsx-a11y/accessible-emoji">💩</span>;
                }
            }

            for (let i = 0; i < this.state.task.answers.clickableList.length; i++) {
                answers.push(<li key={i}><button onClick={() => this.Submit(this.state.task.answers.clickableList[i])}>
                {this.state.task.answers.clickableList[i]}</button></li>);
            }

            this.RandomizeOrderOf(answers);

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