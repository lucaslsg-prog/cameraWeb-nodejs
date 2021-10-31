const express = require('express');
const app = express();
const path = __dirname
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    
    if (res.sendFile(path + '/cameraSala.html')) {
        console.log("Running root page");
    }
});
app.listen(port,() =>{
    console.info("Running application on http://localhost:8080")
})