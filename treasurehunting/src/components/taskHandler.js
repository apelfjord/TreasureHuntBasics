import dataBase from '../server/db/tasks.json';

const provisionalRoute = 'http://localhost:8080';

const randomId = Math.floor(Math.random() * (9999 - 1000)) + 1000;

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

export function InsertID(parentId) {
    const id = randomId;
    const dataObject = {
        "id": id,
        "parentId": parentId,
        "task": {
            "title": "Example question x",
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


        fetch(provisionalRoute + '/hunt').then((response) => {
            return response.json();
        }).then((jsonData) => {
            storeParentData(jsonData);
        }).catch((err) => {
            console.log(err);
        })

    function storeParentData(jsonObject) {
        fetch(provisionalRoute + '/hunt', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonObject)
        }).then(response => console.log('New data added to database: ' + response));

    }


}