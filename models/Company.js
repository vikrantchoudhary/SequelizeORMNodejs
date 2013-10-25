/*jslint node:true */
"use strict";

var Sequelize = require('sequelize-postgres').sequelize;
var sequelize = require('./../config/dbManager').db;
/*var company = sequelize.define('company', {
	    id:Sequelize.INTEGER,
        name:Sequelize.TEXT,
        age:Sequelize.INTEGER,
        address:Sequelize.TEXT,
        salary:Sequelize.INTEGER
    }*/
    /*{
    instanceMethods: {
        sync1: function() {
            console.log("trying to sync");
        //return this.__factory.associations['company'].target.count({ where: { id: this.id } });
        }
       }
    }*/
//);
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

 /*{
     timestamps: false,
     underscored: true
 },
{
	 classMethods: {
		    setImportance: function(newName, callback) {
		      company.findAll().on('success', function(allCompanies) {
		        var chainer = new Sequelize.Utils.QueryChainer
		        allCompanies.forEach(function(company) {
		          chainer.add(company.updateAttributes({ name: newName }))
		        })
		        chainer.run().on('success', function() {
		          callback && callback()
		        })
		      })
		    }
		  }
	 },
  {
	    instanceMethods: {
	      countCompanies: function() {
	    	  return this.__factory.associations['company'].target.count({ where: { id: this.id } });
	      }
	    }
  }*/
 


/*module.exports.getById = function(id) {
    company.find({ where: { id: id } }).success(function(company) {
        if (!company) {
            console.log('company' + id + ' does not exist');
        } else {
            return this.__factory.associations['company'].target({ where: { id: this.id } });
            //console.log("able to handle");
        }
    });
}*/
module.exports.getById = function(id,callback) {
    company.find({ where: { id: id } }).success(function(company) {
        if (!company) {
            callback('company ' + id + ' does not exist');
            //console.log('company ' + id + ' does not exist');
        } else {
            /*callback(null, {
                id: company.id, name: company.name, age: company.age, address: company.address , salary:company.salary
            });*/
            //company.find(company.id);
            //console.log("able to reach to the place" + company.id + company.name);
            //console.log("json form" + JSON.stringify(company));
            callback(null,JSON.toString(company));
        }
    });
}

module.exports.getALLData = function () {
    company.findAll().success(function() {
       console.log("data = " );

    });

}

company.sync().success(function() {
    //callback();
    console.log("syncing is sucessful");
}).error(function(err) {
        console.log("not sucessfull");
        //callback(err);
});
/*function sync() {
    console.log("trying to sync..");
}*/
module.exports.Company = company;

/*var company = sequelize.define('companies', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    address: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null
    },
    salary: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: null
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: null
    }
});
company.sync().success(function() {
    //callback();
    console.log("syncing is sucessful");
}).error(function(err) {
        console.log("not sucessfull");
        //callback(err);
    });
module.exports.Company = company; */


