
/*
 * Sequelize demo : Vikrant
 */
var company = require('./../models/Company');
var stk_sop = require('./../models/stk_sop');



//explicit query of data
//to push data

/*var newCompany = company.build({id:6,name:'test2',age:24,address:'test2',salary:12111});

newCompany.name;
// persist an instance
company.sync();
newCompany.save()
  .error(function(err) {
    console.error("unable to push the new data" + err);
  })
  .success(function() {
    console.log("pused new data");
  }); */

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

var isdata;
var alldata;
function getOneData(result) {
    isdata = result;
}
function getAll(result) {
    alldata = result;
}

/*var oCompany = new Object();
oCompany.id = 6;
oCompany.name = "vikrantUpdate";
oCompany.age = 22;
oCompany.address = "Bangalore";
oCompany.salary = 12121;*/

// update command
var oCompany = {id:4,name:'updateTest',age:24,address:'vikrantupdateTest',salary:12111};
company.updateData(oCompany,function(result) { getOneData(result);});

//create command
/*var oCompany = {id:1,name:'Test1',age:30,address:'vikrant1',salary:12115};
company.createData(oCompany,function(result) { getOneData(result);});
var oCompany = {id:2,name:'Test2',age:30,address:'vikrant2',salary:12115};
company.createData(oCompany,function(result) { getOneData(result);});

var oCompany = {id:3,name:'Test3',age:30,address:'vikrant3',salary:12115};
company.createData(oCompany,function(result) { getOneData(result);});

var oCompany = {id:4,name:'Test4',age:30,address:'vikrant4',salary:12115};
company.createData(oCompany,function(result) { getOneData(result);});*/


//query
//company.getById(3,function(result) { one(result);});
//company.getALLData();
//stk_sop.getById('{AF370E10-4F98-44F4-84C6-A236012096B4}', function(result) { getOneData(result);});
company.getALLData(function(result) { getAll(result);});


console.log("..." + isdata);

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
  res.render('index', { title: 'Sequalize',data : 'Nodejs ORM for Postgres' ,data2 :JSON.stringify(isdata) ,data3: JSON.stringify(alldata) });
};

