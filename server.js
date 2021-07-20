'use strict';
const express = require("express")
const app = express();
const http = require("http").Server(app);
const ejs = require("ejs");

let PORT = process.env.PORT || 3000 ;

app.set("views", __dirname + "/views");
app.engine('.html', ejs.__express);
app.set('view-engine', 'html');
app.use(express.static(__dirname + '/public'));



app.get("/", function(req, res){
    res.render("index.html")
})


//open http server
app.listen(PORT, console.log(`open *:${ PORT }`))