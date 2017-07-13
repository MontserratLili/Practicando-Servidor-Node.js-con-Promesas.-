//vamos a requerir la librería express
var express = require('express');
//ejecutamos la librería de express para poder trabajar con el
var app = express();
var path = require('path');

app.use('/data', express.static(path.join(__dirname + '/data')));
app.use('/static', express.static(path.join(__dirname + '/node_modules')));
app.use('/assets', express.static(path.join(__dirname + '/assets')));

app.get("/a", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080);
