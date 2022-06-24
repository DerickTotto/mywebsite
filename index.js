const express = require('express');
const app = express();
const port = 5000;
const path = require('path');


app.get('/', (req,res) =>{
    res.sendFile('index.html', {root: './public/'})
})

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
})