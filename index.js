const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

app.use(express.static("public"))
app.use("./css", express.static(__dirname+"public/css"))
app.use("./js",express.static(__dirname+"public/js"))
app.use("./img",express.static(__dirname+"public/img"))

app.set('views','./views')
app.set('view engine','ejs')

app.get('/', (req,res) =>{
    res.render('index',{text:'Hola mundo!'})
})

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
})