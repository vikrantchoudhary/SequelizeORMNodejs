/**
 * Created by vikrantc on 10/21/13.
 */
"use strict";

var Sequelize = require('sequelize-postgres').sequelize;
var sequelize = require('./../config/dbManager').db;


//map table columns .
var STK_SOP_ACTION = sequelize.define('stk_sop_action', {
    action_uid: {
        type: 'UUID',
        allowNull: false,
        defaultValue: null
    },
    action_id: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: null
    },
    sys_tenant_uid: {
        type: 'UUID',
        allowNull: false,
        defaultValue: null
    },
    author_uid: {
        type: 'UUID',
        allowNull: false,
        defaultValue: null
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: null
    },
    details: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
    },
    action_xml: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: null
    },
    action_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: null
    },
    is_custom: {
        type: 'BOOLEAN',
        allowNull: false,
        defaultValue: 'false'
    },
    is_editable: {
        type: 'BOOLEAN',
        allowNull: false,
        defaultValue: 'false'
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
    }},
    {
        freezeTableName:true
    }
);
//find by id
module.exports.getById = function(id, callback) {
    STK_SOP_ACTION.find({ where: { action_uid: id } }).success(function(stk_sop_action) {
        if (!stk_sop_action) {
            callback('stk_sop_action' + id + ' does not exist');
        } else {
            console.log("able to handle");
        }
    });
}


//create
module.exports.create = function(action_uid, action_id, sys_tenant_uid, author_uid, name,details,action_xml,action_type,is_custom,is_editable,callback) {
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


STK_SOP_ACTION.sync().success(function() {
    callback();
}).error(function(err) {
        callback(err);
});

// methods to be implements


module.exports.STK_SOP_ACTION = STK_SOP_ACTION;