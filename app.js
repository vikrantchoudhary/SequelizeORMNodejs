
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var stylus = require('stylus');
var path = require('path');
var nib = require('nib');

var company = require('./models/Company');
var stk_sop = require('./models/stk_sop');

var app = express();

GLOBAL.app = app;

/**
 *
 * @type {Array}
 */
//var args = process.argv;

//var port = arg[2]? args[2]:8010;

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .use(nib())
}

var alldata;
function getmyData(result) {
    alldata = result;
}
//company.getById(3,function(result) { one(result);});
//company.getALLData();
//stk_sop.getById('{AF370E10-4F98-44F4-84C6-A236012096B4}', function(result) { getOneData(result);});
//stk_sop.getALLData(function(result) { getAll(result);});
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler({dumpException:true , showStack:true}));
}

app.get('/company',function(req, res) {
    company.getALLData(function(result) { getmyData(result);
    res.json(alldata);
    //res.data = alldata;
    })
});
app.get('/stk_sop',function(req, res) {
    stk_sop.getALLData(function(result) { getmyData(result);
        res.json(alldata);
    })
});

app.get('/stk_sop/:id',function(req, res) {
    stk_sop.getById(req.params.id,function(result) { getmyData(result);
        res.json(alldata);
        //res.data = alldata;
    })
});
app.get('/company/:id',function(req, res) {
    company.getById(req.params.id,function(result) { getmyData(result);
        res.json(alldata);
        //res.data = alldata;
    })
});

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
