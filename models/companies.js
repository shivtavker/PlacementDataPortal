var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    ID: {type:Number, required: true, unique:true},
    CompanyName: {type:String, required: true, unique:true}
});

schema.plugin(mongooseUniqueValidator)

module.exports = mongoose.model('companie', schema);