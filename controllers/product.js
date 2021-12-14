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
exports.CrearProducto = function(req, res){
    const element = new ModProduct(req.body)
    console.log('/POST/CrearProducto')
    console.log(req.body)
    element.save((err,result)=>{
        if(err){
            return res.status(500).json({"error":err.toString()})
        }
        return res.status(200).json({"result":result})
    })
}
exports.BorrarProducto = function(req, res){
    const {idProduct} =req.params
    const elProd = idProduct
    ModProduct.findOne({idProduct:elProd},function(err,producto){
        if(err) return res.send(500, err.message);
        if(producto!=null){
            ModProduct.deleteOne({idProduct:elProd},function(err, producto){
                console.log('DELETE/BorrarProducto/'+elProd);
                res.status(200).jsonp(producto);
            })
        }else{
            res.status(200).jsonp("Producto no registrado");
        }
    })
}
exports.BuscarProducto = function(req, res){
    const {idProduct} =req.params
    const elProd = idProduct
    ModProduct.findOne({idProduct:elProd},function(err,producto){
        if(err) return res.send(500, err.message);
        if(producto!=null){
            console.log('GET/BuscarProducto/'+elProd);
            res.status(200).jsonp(producto);
        }else{
            res.status(200).jsonp("Producto no registrado");
        }
    })
}
exports.ModificarProducto = function(req, res){
    const {idProduct} =req.params
    const elProd = idProduct
    let update = req.body
    ModProduct.findOne({idProduct:elProd},function(err,producto){
        if(producto==null){
            res.status(200).jsonp("Producto no registrado");
        }
    })
    ModProduct.findOneAndUpdate({idProduct:elProd},update, (err, productUpdated)=>{
        if(err) return res.send(500, err.message);
        console.log("/PUT/ModificarProducto/"+elProd)
        res.status(200).jsonp("La modificacion del producto se ha hecho en el producto con Id: "+elProd);
    }) 
}
