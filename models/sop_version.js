/**
 * Created by vikrantc on 10/21/13.
 */
"use strict";

var Sequelize = require('sequelize-postgres').sequelize;
var sequelize = require('./../config/dbManager').db;


//map table columns .
var SOP_VERSION = sequelize.define('sop_version', {
    version_uid: {
        type: 'UUID',
        allowNull: false,
        defaultValue: null
    },
    sop_uid: {
        type: 'UUID',
        allowNull: true,
        defaultValue: null
    },
    version_num: {
        type: 'DOUBLE PRECISION',
        allowNull: false,
        defaultValue: null
    },
    status: {
        type: 'BOOLEAN',
        allowNull: false,
        defaultValue: 'false'
    },
    draft: {
        type: 'BOOLEAN',
        allowNull: false,
        defaultValue: 'false'
    },
    sop_xml: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: null
    },
    time_created: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: null
    },
    time_modified: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
    },
    author_uid: {
        type: 'UUID',
        allowNull: false,
        defaultValue: null
    },
    comments: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
    },
    row_version: {
        type: 'BYTEA',
        allowNull: false,
        defaultValue: null
    }},
    {
        freezeTableName:true
    }
);
module.exports.SOP_VERSION = SOP_VERSION;