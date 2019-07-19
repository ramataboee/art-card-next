const mongoose = require('mongoose');

//import models
const Client = require('./models/Client');
const Hts  = require('./models/Hts');

mongoose.Promise = global.Promise;

const dev = process.env.NODE_ENV != 'production';
if(dev){
    mongoose.set('debug', true)
}

module.exports =  async() => {
    console.log('connect to MongoDB');
 return await mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
}


//const db = mongoose.connection;
//db.on('error', console.error.bind(console,'connection error:'));
