var mongoose = require('mongoose');
var _ = require('underscore');
var path = require('path');
var config = require(path.resolve('./config.js'));
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var locationSchema = require('./locationSchema.js').schema;

var schemaOptions = _.extend({}, config.schemaOptions);
schemaOptions = _.extend(schemaOptions, { _id: true });

var userSchema = new Schema({
    login: {
        email: String
    },
    signedUpDateTime: Date,
    lastLoginDateTime: Date,
    rating: Number,
    eventsHosted: [ObjectId],
    eventsAttended: [ObjectId],
    accountPrefrences: {
        searchRadius: Number
    },
    lastLocation: locationSchema
}, schemaOptions);

exports.schema = userSchema;
exports.model = mongoose.model('User', userSchema);
