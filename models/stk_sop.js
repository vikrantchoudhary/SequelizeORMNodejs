/**
 * Created by vikrantc on 10/21/13.
 */
"use strict";

var Sequelize = require('sequelize-postgres').sequelize;
var sequelize = require('./../config/dbManager').db;



//map table columns .
var STK_SOP = sequelize.define('stk_sop', {
    sop_uid: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: null
    },
    sys_tenant_uid: {
        type: 'UUID',
        allowNull: false,
        defaultValue: null
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: null
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null
    },
    details: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null
    },
    service_report_text: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null
    },
    parent_sop_uid: {
        type: 'UUID',
        allowNull: true,
        defaultValue: null
    },
    is_custom: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0'
    },
    is_editable: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0'
    },
    row_version: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: null
    },
    is_deleted: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: '0'
    },
    is_default: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: '1'
    },
    ostype_uid: {
        type: 'UUID',
        allowNull: true,
        defaultValue: '09841f0f-5265-46cf-8aae-8c39038b4d5f'
    }
},
    {
        freezeTableName:true
    }
);
//STK_SOP.hasMany(SOP_VERSION);

//find by id
module.exports.getById = function(id) {
    STK_SOP.find({ where: { sop_uid: id } }).success(function(stk_sop) {
        if (!stk_sop) {
            console.log('stk_sop' + id + ' does not exist');
            //callback(null);
        } else {
            console.log("able to handle" + JSON.stringify(stk_sop));
            //return stk_sop;
            //callback(JSON.stringify(stk_sop));
        }
    });
}


//create
module.exports.create = function(sop_uid, sys_tenant_uid,name,description,details,service_report_text,parent_sop_uid, is_custom,is_editable,callback) {
    STK_SOP_ACTION.create({
        action_uid:action_id,
        action_id:action_id,
        sys_tenant_uid:sys_tenant_uid,
        author_uid:author_uid,
        name:name,
        details:details,
        action_xml:action_xml,
        action_type:action_type,
        is_custom:is_custom,
        is_editable: is_editable

    }).success(function(user) {
            callback();
        }).error(function(err) {
            callback(err);
        });
}

module.exports.STK_SOP = STK_SOP;