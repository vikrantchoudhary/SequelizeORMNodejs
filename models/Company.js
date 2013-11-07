/*jslint node:true */
"use strict";

var Sequelize = require('sequelize-postgres').sequelize;
var sequelize = require('./../config/dbManager').db;
var util = require('util');
var events = require('events');
var emitter = module.exports.emitter = new events.EventEmitter();

var company = sequelize.define('company', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: null
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: null
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: null
    },
    address: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null
    },
    salary: {
        type: 'REAL',
        allowNull: true,
        defaultValue: null
    }
},
{
    freezeTableName:true
}
);


exports.getById = function (id, callback) {
    company.find({ where: { id: id } }).success(function(company) {
        if (!company) {
            callback('company ' + id + ' does not exist');
        }
        else {
            callback(company);
        }
    });
}

exports.getALLData = function (callback) {
    company.findAll()
        .success(function(company) {
            console.log("success");
            callback(company);
        })
        .failure(function (error) {
            console.log("failure");
            callback(error);
        })
};

exports.updateData = function(companyData, callback) {
    //console.log(companyData);
    company.find({ where: { id: companyData.id } }).success(function(company) {
        if (!company) {
            callback(new Error("No note found for key " + companyData.id));
        } else {
            company.updateAttributes({
                id:companyData.id,
                name: companyData.name,
                age: companyData.age,
                salary: companyData.salary
            }).success(function() {
                    //debugger;
                    console.log("... "  + company  + " ... " + companyData);
                    callback(company);
                }).error(function(err) {
                    callback(err);
                });
        }
    }).error(function(err) {
            callback(err);
        });

}

exports.createData = function(companyData, callback) {
    console.log(companyData);
    company.create(companyData).success(function(company) {
        callback(companyData);
    }).error(function (err) {
        callback(err);
    });
    //company.sync({force:true});
}

/*
exports.sync = function () {
    company.sync().success(function() {
        console.log("syncing is sucessful");
    }).error(function(err) {
            console.log("not sucessfull");
    });
};
*/

module.exports.Company = company;

