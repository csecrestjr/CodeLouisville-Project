var mongoose = require('mongoose');
var _ = require('underscore');
var path = require('path');
var config = require(path.resolve('./config.js'));
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var locationSchema = require('./locationSchema.js');
var commentSchema = require('./commentSchema.js');
var wishSchema = require('./wishSchema.js');

var eventSchema = new Schema({
    title: String,
    creationDate: Date,
    details: String,
    venue: locationSchema,
    hostId: ObjectId,
    attendees: [ObjectId],
    comments: [commentSchema],
    wishes: [wishSchema],
    isTurntOn: Boolean,
    isCancelled: Boolean
}, config.schemaOptions);

exports.schema = eventSchema;
exports.model = mongoose.model('Event', eventSchema);
