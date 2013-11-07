/**
 * Created by vikrantc on 10/21/13.
 */
"use strict";

var Sequelize = require('sequelize-postgres').sequelize;
var sequelize = require('./../config/dbManager').db;

//map table columns .
var SOP_SERVICE = sequelize.define('sop_service', {
    service_uid: {
        type: 'UUID',
        allowNull: false,
        defaultValue: null
    },
    sys_tenant_uid: {
        type: 'UUID',
        allowNull: false,
        defaultValue: null
    },
    session_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: null
    },
    stk_service_uid: {
        type: 'UUID',
        allowNull: false,
        defaultValue: null
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: null
    },
    time_redeemed: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
    },
    time_completed: {
        type: Sequelize.DATE,
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

module.exports.SOP_SERVICE = SOP_SERVICE;