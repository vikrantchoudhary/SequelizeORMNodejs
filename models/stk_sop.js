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

module.exports.STK_SOP = STK_SOP;

exports.sync = function(callback) {
    STK_SOP.sync().success(function() {
        console.log("i am here");
        callback();
    }).error(function(err) {
            callback(err);
        });
};

//STK_SOP.hasMany(SOP_VERSION);

//find by id


exports.getById = function(key, callback) {
    STK_SOP.find({ where: { sop_uid: key } }).success(function(stk_sop) {
        if (!stk_sop) {
            callback('stk_sop ' + id + ' does not exist');
        }
        else {
            callback(stk_sop);
        }
    });
}

exports.getALLData = function (callback) {
    STK_SOP.findAll()
        .success(function(stk_sop) {
            console.log("success");
            callback(stk_sop);
        })
        .failure(function (error) {
            console.log("failure");
            callback(error);
        })
};
exports.updateData = function(stk_sopData, callback) {
    stk_sop.find({ where: { sop_uid: stk_sopData.sop_uid } }).success(function(stk_sop) {
        if (!stk_sop) {
            callback(new Error("No note found for key " + stk_sopData.sop_uid));
        } else {
            stk_sop.updateAttributes({
                sop_uid:stk_sopData.sop_uid,
                sys_tenant_uid:stk_sopData.sys_tenant_uid,
                name:stk_sopData.name,
                description:stk_sopData.description,
                details:stk_sopData.details,
                service_report_text:stk_sopData.service_report_text,
                parent_sop_uid:stk_sopData.parent_sop_uid,
                is_custom:stk_sopData.is_custom,
                is_editable:stk_sopData.is_editable,
                row_version:stk_sopData.row_version,
                is_deleted:stk_sopData.is_deleted,
                is_default:stk_sopData.is_default,
                ostype_uid:stk_sopData.ostype_uid
            }).success(function() {
                    exports.emitter.emit('sop_uid updated', stk_sopData);
                    callback();
                }).error(function(err) {
                    callback(err);
                });
        }
    }).error(function(err) {
            callback(err);
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


