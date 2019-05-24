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

app.get('/:pathway', (req, res, next) => {
    const data = fs.readFileSync(dbPath, (err, result) => {
        return result;
    })
    switch(req.params.pathway) {
        case 'tasks':
            res.send(data)
            break;
        case 'hunt':
            res.send(data)
            break;
        default:
            return 'Something went wrong';
    }  
})

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});