const mongoose = require('mongoose');

const htsSchema = new mongoose.Schema({
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    },
    status:{
        type:String,
        required:true
    },
    client: {type:mongoose.Schema.Types.ObjectId, ref: 'Client'}
});

const Hts = mongoose.model('Hts', htsSchema);

module.exports = Hts; 
//export default Hts;