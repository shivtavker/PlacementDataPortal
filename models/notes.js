var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    ID: {type:Number, required: true, unique:true},
    CompanyID: {type:String, required: true},
    columnID: {type:Number, required: true},
    title: {type:String, required: true},
    body: {type:String}
});

schema.plugin(mongooseUniqueValidator)

module.exports = mongoose.model('note', schema);