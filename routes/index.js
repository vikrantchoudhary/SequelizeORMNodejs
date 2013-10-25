
/*
 * Sequelize demo : Vikrant
 */
//var Sequelize = require('sequelize').sequelize;
//var Sequelize = require('sequelize-postgres').sequelize;
//var config    = require('./../config/config.json'); 
var company = require('./../models/Company');
var stk_sop = require('./../models/stk_sop');
/*var sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  port: config.development.port,
  dialect: 'postgres',
  logging: false,
  define: {
        freezeTableName: true
    }
});*/



//explicit query of data
/*var myData;
sequelize.query("SELECT * FROM company").success(function(myTableRows) {
	  console.log(myTableRows);
	  myData =JSON.stringify(myTableRows);
	}); 
*/
//to push data

/*var newCompany = company.build({id:6,name:'test2',age:24,address:'test2',salary:12111});
//newCompany.name; 
// persist an instance
//company.sync();
newCompany.save()
  .error(function(err) {
    console.error("unable to push the new data" + err);
  })
  .success(function() {
    console.log("pused new data");
  });
*/
//to query group by
/*company.findAll(({group: 'id','name'})).success(function(myTableRows) {
		  console.log(myTableRows); 
		
	}); */
/*var myData;
company.all().success(function(myTableRows) {
	console.log(myTableRows);
	myData =JSON.stringify(myTableRows);
});*/

//find query
/*company.find(6).success(function(myTableRows) {
	console.log("new data" + JSON.stringify(myTableRows));
});*/

var test = company.getById(3);
//company.getALLData();

//var stk = stk_sop.getById('{AF370E10-4F98-44F4-84C6-A236012096B4}');
console.log("data = " + test);

//to add data
/*var newCompany = company.build({id:11,name:'test2',age:24,address:'test2',salary:12111});
//persist an instance
newCompany.save()
.error(function(err) {
  console.error("unable to push the new data" + err);
})
.success(function() {
  console.log("pushed new data");
});*/


exports.index = function(req, res){
  res.render('index', { title: 'Sequalize',data : 'Nodejs ORM for Postgres' ,data2 : "test" });
};

