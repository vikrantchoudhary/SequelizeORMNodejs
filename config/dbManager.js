/**
 * New node file
 */
"use strict";

var Sequelize = require('sequelize-postgres').sequelize;
var postgres  = require('sequelize-postgres').postgres;
var pg = require('pg');
var config    = require('./config.json');
var db = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  port: config.development.port,
  dialect: 'postgres',
  logging: false
});

module.exports.db = db;

//load models
/*var models = [
 'Company',
 'stk_sop'
];

models.forEach(function(model) {
 module.exports[model] = sequelize.import(__dirname + '/' + model);
});*/