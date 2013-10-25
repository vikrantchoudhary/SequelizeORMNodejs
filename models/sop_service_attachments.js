/**
 * Created by vikrantc on 10/21/13.
 */
"use strict";

var Sequelize = require('sequelize-postgres').sequelize;
var sequelize = require('./../config/dbManager').db;

//map table columns .
var SOP_SERVICE_ATTACHMENTS = sequelize.define('sop_service_attachments', {
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
    attachment_type: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    location: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
    }},
    {
        freezeTableName:true
    }
);

module.exports.SOP_SERVICE_ATTACHMENTS = SOP_SERVICE_ATTACHMENTS;