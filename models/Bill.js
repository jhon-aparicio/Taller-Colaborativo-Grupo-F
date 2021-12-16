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
    details:[{
        cant:{
            type: Number,
            required: true
        },
        product:{
            type: String,
            required: true
        }

    }]

})

module.exports = mongoose.model('Bill',billSchema)