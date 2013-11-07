/**
 * Created by vikrantc on 10/21/13.
 */
"use strict";

var Sequelize = require('sequelize-postgres').sequelize;
var sequelize = require('./../config/dbManager').db;


//map table columns .
var SOP_SESSION = sequelize.define('sop_session', {
    session_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    session_uid: {
        type: 'UUID',
        allowNull: false,
        defaultValue: null
    },
    sys_tenant_uid: {
        type: 'UUID',
        allowNull: false,
        defaultValue: null
    },
    start_time: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
    },
    end_time: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
    },
    current_status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: null
    },
    agent_uid: {
        type: 'UUID',
        allowNull: true,
        defaultValue: null
    },
    consumer_uid: {
        type: 'UUID',
        allowNull: true,
        defaultValue: null
    },
    time_modified: {
        type: Sequelize.DATE,
        allowNull: false,
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

module.exports.SOP_SESSION = SOP_SESSION;