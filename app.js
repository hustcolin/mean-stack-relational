'use strict';

/**
 * Module dependencies.
 */
var express     = require('express');
var fs          = require('fs');
var path = require('path');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load Configurations
var config          = require('./config/config');
var winston         = require('./config/winston');

winston.info('Starting '+config.app.name+'...');
winston.info('Config loaded: '+config.NODE_ENV);
winston.debug('Accepted Config:',config);

var db              = require('./config/sequelize');
var passport        = require('./config/passport');

var staticPath = path.resolve('public');

var app = express();
app.use(serveStatic(staticPath));

//Initialize Express
require('./config/express')(app, passport);

//Start the app by listening on <port>
app.listen(config.PORT);
winston.info('Express app started on port ' + config.PORT);

//expose app
module.exports = app;
