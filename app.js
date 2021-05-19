const express = require ('express');
const logger = require ('morgan');
const path = require ("path");


const app = express();

app.use (logger('dev'));
app.use (express.json());
app.use (express.static(path.join(__dirname, "public")))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", 'ejs');

app.get ('/', function(req, res){
    res.render ('index',{user: "cesar",
    info: ["likes to watch a movie", "read", "eat"]
})
});
app.get("/photo-fun", function (req, res){
    res.render ('photos');
});
// this is my app
app.get ("/:pet/:age", function(req, res){
    res.render({pet: req.params.pet, age: req.params.age})
})
app.listen (3000, function (){
    console.log ("server started in port 3000");
})