'use strict'
const mongoose = require('mongoose')

const uri='mongodb+srv://ElectivaII:1234@tallerelectiva.omw7l.mongodb.net/test';

mongoose.connect(uri)
    .then(()=>console.log('Connect to DataBase success'))
    .catch((err)=>console.log(`Error to connect ${err}`))

 module.exports = mongoose