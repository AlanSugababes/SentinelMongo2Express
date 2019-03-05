const express = require('express');

const app = express();

app.get('/api/sentinel' , (req, res) => {
    const keywords = [
        {keyword: 'bomb'},
        {keyword: 'terrorist'},
        {keyword: 'gun'},
        {keyword: 'explosives'}
    ];

    res.json(keywords);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));