import dataBase from '../server/db/tasks.json';

const provisionalRoute = 'http://localhost:8080';
const newId = Math.floor(Math.random() * (9999 - 1000)) + 1000;

export function FetchTaskData(id) {
    const fetchById = dataBase.tasks.filter((e) => e.id === id);
    return fetchById[0].task;
}

export function FetchHuntData(id) {
    const fetchById = dataBase.hunt.filter((e) => e.id === id);
    return fetchById[0];
}

export function GetTaskData() {
    fetch(provisionalRoute + '/tasks').then((response) => {
        return response.json();
    }).then((jsonData) => {
        console.log(jsonData);
    }).catch((err) => {
        console.log(err);
    })
}

export function addQuestion(parentId = 5538) {
    InsertID(parentId);
    fetch(provisionalRoute + '/hunt/' + parentId).then((response) => {
        return response.json();
    }).then((jsonData) => {
        jsonData.tasks.push(newId);
        // BACKUP //
        deleteOldData(parentId);
        updateTable(jsonData);
    }).catch((err) => {
        console.log(err);
    })

    function deleteOldData(id) {
        fetch(provisionalRoute + '/hunt/' + id, {
            method: 'DELETE',
            })
    }

    function updateTable(data) {
        console.log(data);
        fetch(provisionalRoute + '/hunt', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => console.log('New data added to database: ' + response));
    }
}

export function InsertID(parentId) {
    const id = newId;
    const dataObject = {
        "id": id,
        "parentId": parentId,
        "task": {
            "title": "UNTITLED QUESTION",
            "answers": {
                "clickableList": [
                    "Right answer",
                    "Wrong Answer",
                    "Wrong Answer",
                    "Wrong Answer"
                ],
                "correctAnswer": "Right answer"
            },
            "correct": false
        }

    }
    
    fetch(provisionalRoute + '/tasks', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObject)
    }).then(response => console.log('New data added to database: ' + response));
}