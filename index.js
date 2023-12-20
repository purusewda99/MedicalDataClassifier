const express = require('express');
const bodyParser = require('body-parser');
const { classifyDescription } = require('./classify');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.post('/classify', (req, res) => {
    const { description } = req.body;

    if(!description) {
        return res.status(400).send('Description is required');
    }

    let category = 'Unknown';
    if(description) {
        category = classifyDescription(description);
    }

    res.send({ category });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});