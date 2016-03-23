var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected');
});

var User = require('./models/user.js').model;
var Event = require('./models/event.js').model;
var Location = require('./models/locationSchema.js').model;
var Wish = require('./models/wishSchema.js').model;

//var ramu = new User({
//    login: {
//        email: 'RamuKaka@Kaka.com'
//    },
//    signedUpDateTime: new Date()
//});

//ramu.save(function (err) {
//    if (err) return console.error(err);
//});

//console.log(ramu._id);

var outing = new Event({
    title: 'Its yo birthday!',
    creationDate: new Date(),
    details: 'Lets get hyped up',
    venue: new Location({
        type: 'point',
        coordinates: [10.12, 82.15],
        name: 'Cheesecake factory'
    }),
    hostId:null,
    wishes: [new Wish({
        title: '1 lb Cake',
        count: 2
    })]
});

console.log(outing);

outing.save(function (err) {
    if (err) console.error(err);
});

Event.find(function (err, eve) {
    console.log(eve);
    console.log(eve.wishes);
});

//User.find(function(err, user) {
//    console.log(user);
//});
