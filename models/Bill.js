'use restrict'

const mongoose = require('mongoose')

const {Schema} = mongoose

const billSchema = new Schema({
    number :{
        type : String,
        required: true,
        unique: true
    },
    dateBill:{
        type: Date,
        required : true
    },
    typePay:{
        type: Boolean,
        required: true
    },
    details:{
        type: Schema.Types.ObjectId,
        ref: 'Detail'
    }

})

module.exports = mongoose.model('Bill',billSchema)