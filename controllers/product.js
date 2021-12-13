'use strict'

const ModProduct = require('../models/Product')

exports.ListaProductos = function(req, res){
    ModProduct.find(function (err, producto){
        console.log('/GET/ListaProductos')
        if(err){
            return res.status(500).json({"error":err.toString()})
        }
        return res.status(200).json(producto)      
    })
}
