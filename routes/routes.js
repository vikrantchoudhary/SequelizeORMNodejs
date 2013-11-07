/**
 * Resource Routes
 */
module.export = function() {
    var Resource = require('express-resource');
    app.resource('company/id',require('./models/Company'));
}