/**
 * Created by vikrantc on 10/21/13.
 */
"use strict";

var Sequelize = require('sequelize-postgres').sequelize;
var sequelize = require('./../config/dbManager').db;


//map table columns .
var STK_ADMIN_SETTING =  sequelize.define('stk_admin_settings', {
    id: {
        type: 'UUID',
        allowNull: false,
        defaultValue: null
    },
    tenant_uid: {
        type: 'UUID',
        allowNull: false,
        defaultValue: null
    },
    sop_export_enabled: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: null
    }},
    {
        freezeTableName:true
    }
);
module.exports.STK_ADMIN_SETTING = STK_ADMIN_SETTING;