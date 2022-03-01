'use restrict'

const mongoose = require('mongoose')

const {Schema} = mongoose

const detailSchema = new Schema({
    cant:{
        type: Number,
        required: true
    },
    product:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Detail',detailSchema)