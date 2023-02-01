const express = require('express');
const app = express();
const port = 3000;

// routes
app.get('/hello', (req, res, next) => {
    res.send('Task Manager App');
});

app.listen(port, console.log(`Server is listening on port ${port}...`));
