
var format = require('util').format;
var async = require('async');


function getThings(cb) {
  
  var list = ['this','is','sample','code'];
  var orderedList = list.reverse();
  cb(null, orderedList);
 
}

function getThingsFromMongoDb(cb) {
  //NOTE: db is a global connection, instantiated in app.js AND in Mocha service specs

  //db.collection('collectionName').find({}).toArray(function(err, docs) {    
    //cb(null, docs);
  //});
}


module.exports = {
  things: getThings
}