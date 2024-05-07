const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const data = req.body;
    // Example: Check if the event is an issue comment
    if (data.event === 'issues' && data.comment.issue.number === 1) {
        // Send a message to Discord
        client.channels.cache.get('1237478848052854906').send(`GitHub Event: ${data.event}\nIssue: ${data.comment.issue.title}`);
    }
    res.status(200).send('Success');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});