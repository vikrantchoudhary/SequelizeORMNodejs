/**
 * Created by vikrantc on 10/21/13.
 */
"use strict";

var Sequelize = require('sequelize-postgres').sequelize;
var sequelize = require('./../config/dbManager').db;


//map table columns .
var SOP_SESSION_COMMENT =  sequelize.define('sop_session_comment', {
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
    comment_time: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: null
    },
    comment_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: null
    }},
    {
        freezeTableName:true
    }
);
module.exports.SOP_SESSION_COMMENT = SOP_SESSION_COMMENT;