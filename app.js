const express = require('express');
const app = express();
const path = __dirname + '/views/'
const port = 8080;

app.get('/', (req, res) => {
    
    if (res.sendFile(path + 'index.html')) {
        console.log("Running root page");
    }
});
app.listen(port)