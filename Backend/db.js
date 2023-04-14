const mongoose = require('mongoose');

function db(){
    mongoose.connect('mongodb://127.0.0.1:27017/Backend')
  .then(() => console.log('Connected!'));
}


  module.exports=db