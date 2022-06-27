const express = require ('express');
const app = express();
const port = 5000;
const bodyParser = require ("body-parser");
const path = require ('path');

app.use(express.static("public"))
app.use("./css", express.static(__dirname+"public/css"))
app.use("./js",express.static(__dirname+"public/js"))
app.use("./img",express.static(__dirname+"public/img"))

app.use(express.static("views"))
app.use("./controllers", express.static(__dirname+'views/controllers'))

app.set('views','./views')
app.set('view engine','ejs')

app.get('/', (req,res) =>{
    res.render('index',{text:'Hola mundo!'})
})

app.get('/login',(req,res)=>{
    res.render('login')
})
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
})