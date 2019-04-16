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

    updateState = async () => {
        if (!this.state.id) {
            await FetchTaskData(this.props.id)
                .then((taskObj) => this.setState(taskObj))
        }
    }
    
    render() {
        this.updateState();
        console.log(this.state)
        const statePath = this.state.task;
        let answers = []
        let correct = ''
        let picPath = ''
        if (this.state.task.answers.clickableList.length === 0) {
            if(this.state.task.correct) {
                correct = <li><h1><span role="img">👍</span></h1></li>;
                
            } else {
                correct = <li><h1><span role="img">💩</span></h1></li>;
                }
            }

            for (let i = 0; i < this.state.task.answers.clickableList.length; i++) {
                answers.push(<li key={i}><button onClick={() => this.submit(this.state.task.answers.clickableList[i])}>
                {this.state.task.answers.clickableList[i]}</button></li>);
            }

            if (statePath.pic) {
                picPath = <img alt='' src={ExampleImage} width="100%"></img>
            }

            return(
                <div className = "Task" >
                <header className="infobar">
            <p><b>{this.state.task.title}</b></p>
                </header>
                {picPath}
            <ul>
                {answers}
                {correct}
            </ul>
        </div>
        );
    }
}

export default Task;