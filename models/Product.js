'use restrict'

const mongoose = require('mongoose')
//const typeProduct = require('ETypeProduct')
//const ETypeProducts = require('./ETypeProduct')

const {Schema} = mongoose

const STOCK_MIN = 5

const prodSchema = new Schema({
    idProduct :{
        type : String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required : true
    },
    value:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    dateExpired:{
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Product',prodSchema)