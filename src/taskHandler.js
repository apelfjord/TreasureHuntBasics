import config from './config.js';
const path = config.backendUrl;
const newId = Math.floor(Math.random() * (9999 - 1000)) + 1000;

export async function FetchTaskData(id) {
    const db = await fetch(path + '/tasks')
        .then((response) => {
        return response.json();
    });
    const fetchById = db.filter((e) => e.id === id);
    return fetchById[0];
}

export async function FetchHuntData(id) {
    const db = await fetch(path + '/hunt').then((response) => {
        return response.json();
    });
    const fetchById = db.filter((e) => e.id === id);
    return fetchById;
}

export function GetTaskData() {
    fetch(path + '/tasks').then((response) => {
        return response.json();
    })
        .then((data) => console.log(data))
        .catch((err) => {
        console.log(err);
    })
}

export async function GetHuntData() {
    fetch(path + '/hunt').then((response) => {
        return response.json();
    }).catch((err) => {
        console.log(err);
    })
}

export function addQuestion(parentId = 5538) {
    InsertID(parentId);
    fetch(path + '/hunt/' + parentId).then((response) => {
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
        fetch(path + '/hunt/' + id, {
            method: 'DELETE',
            })
    }

    function updateTable(data) {
        console.log(data);
        fetch(path + '/hunt', {
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
    
    fetch(path + '/tasks', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObject)
    }).then(response => console.log('New data added to database: ' + response));
}