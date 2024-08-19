// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the 'express' package to create a web server
app.use(express.static('public'));

// Create 'GET' route to get comments data
app.get('/comments', (req, res) => {
    res.send('Comments data');
});

// Start the web server
app.listen(port, () => {
    console.log(`Web server listening at http://localhost:${port}`);
});