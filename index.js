const express = require('express');
const app = express();
const importedData = require('./player.json');

const port = env.port || 3000;


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/players", (req, res) => {
    res.set(importedData);
});

app.listen(port, () =>{
    console.log('Running on port '+port);
});