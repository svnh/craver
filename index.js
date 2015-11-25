process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
var config = require('./config/' + process.env.NODE_ENV)

var app = require('express')();
require('./routes/index')(app);

app.listen(config.port, function() { console.log('listening on ' + config.port) })
