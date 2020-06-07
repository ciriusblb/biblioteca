'use strict';
var express = require('express'),
    server = express(),
    swig = require('swig'),
    // bodyParser=require('body-parser'),
    // methodOverride = require('method-override'),
    port = process.env.PORT || 8000;


// server.use(bodyParser.json());

//Templates
server.engine('html',swig.renderFile);
server.set('view engine','html');
server.set('views', __dirname + '/public');
swig.setDefaults({cache:false});
//fin de templates

// //Archivos estaticos
server.use(express.static(__dirname+'/public'));


server.listen(port,function(){
	console.log("Servidor escuchando al puerto "+ port);
});

// require('./routers')(server);