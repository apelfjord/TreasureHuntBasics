const express = require('express');
const cors = require('cors');
const fs = require('fs');
const dbPath = './db/tasks.json'
const PORT = 4000;

const app = express();

app.use(cors());

app.get('/', (req, res, next) => {
    res.send('You are now cursed')
    })

app.get('/tasks', (req, res, next) => {
    const data = fs.readFileSync(dbPath, (err, result) => {
        console.log(result)
        return result;
    })
    res.send(data)
})

app.get('/hunt', (req, res, next) => {
    const data = fs.readFileSync(dbPath, (err, result) => {
        console.log(result)
        return result;
    })
    res.send(data)
})

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});