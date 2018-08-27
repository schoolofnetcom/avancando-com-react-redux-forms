const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).json({
        data: [{
            id: 1,
            name: 'Post 1'
        }, {
            id: 2,
            name: 'Post 2'
        }]
    });
});

app.post('/', (req, res) => {
    return res.status(200).json({
        data: req.body
    })
});

app.listen(9000, () => console.log('Started'));