var mongoose = require('mongoose');

var BookSchema = mongoose.Schema({
BookSchema.methods.isFree = function(){
  return this.owner === null;
};

BookSchema.methods.giveToUser = function(user){
  var index = this.requesters.indexOf(user);
  if (index > -1) {
    this.owner = this.requesters[index].splice(index,1);
    return true;
  }
  return false;
};

BookSchema.methods.returnBook = function(){
  this.owner = null;
};


module.exports = mongoose.model('Book', BookSchema);