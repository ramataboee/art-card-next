const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    clientId: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: String
    
});

//if client is deleted, perform a cascade delete for all hts visits
clientSchema.pre('remove', function(next){
    this.model('Hts').deleteMany({client: this._id}, next);
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client; 
//export default Client;