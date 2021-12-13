'use strict'
const mongoose = require('mongoose')

const url='mongodb+srv://ElectivaII:1234@tallerelectiva.omw7l.mongodb.net/FacturationSystem';

const db = mongoose.connect(url,{useNewUrlParser:true},(err)=>{
    if(err){
        console.log('Error en la conexion con Mongo')
    }else{
        console.log('Conect Success')
    }
})

module.exports = db