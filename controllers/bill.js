'use strict'

const ModBill = require('../models/Bill')

exports.ListaFactura =function(req, res){
    ModBill.find(function (err, factura){
        console.log('/GET/ListaFactura')
        if(err){
            return res.status(500).json({"error":err.toString()})
        }
        return res.status(200).json(factura)
    })
}
exports.CrearFactura = function(req, res){
    console.log("Hola")
    const element = new ModBill(req.body)
    console.log('/POST/CrearFactura')
    console.log(req.body)
    element.save((err,result)=>{
        if(err){
            return res.status(500).json({"error":err.toString()})
        }
        return res.status(200).json({"result":result})
    })
}
exports.BorrarFactura = function(req, res){
    const {number} =req.params
    const laFact = number
    ModBill.findOne({number:laFact},function(err,factura){
        if(err) return res.send(500, err.message);
        if(factura!=null){
            ModBill.deleteOne({number:laFact},function(err, factura){
                console.log('DELETE/BorrarFactura/'+laFact);
                res.status(200).jsonp(factura);
            })
        }else{
            res.status(200).jsonp("Factura no existente");
        }
    })
}
exports.BuscarFactura = function(req, res){
    const {number} =req.params
    const laFact = number
    ModBill.findOne({number:laFact},function(err,factura){
        if(err) return res.send(500, err.message);
        if(factura!=null){
            console.log('GET/BuscarFactura/'+laFact);
            res.status(200).jsonp(factura);
        }else{
            res.status(200).jsonp("Factura no existente");
        }
    })   
}
exports.ModificarFactura = function(req, res){
    const {number}=req.params
    const laFact = number
    let update = req.body
    ModBill.findOne({number:laFact},function(err,factura){
        if(factura==null){
            res.status(200).jsonp("Factura no registrada")
        }
    })
    ModBill.findOneAndUpdate({number:laFact},update, (err, billUpdated)=>{
        if(err) return res.send(500, err.message);
        console.log("/PUT/ModificarFactura/"+laFact)
        res.status(200).jsonp("Se ha hecho la modificación en la factura con number: "+laFact);
    }) 
}
exports.ListaDetalle = function(req, res){
    const {number}=req.params
    const laFact = number
    ModBill.findOne({number:laFact},function(err,factura){
        if(factura==null){
            res.status(200).jsonp("Factura no registrada")
        }else{
            console.log('/GET/ListaDetalle/'+laFact)
            res.status(200).jsonp(factura.details)
        }
    })   
}
exports.AddDetail = function(req, res){
    
}
exports.BorrarDetalle = function(req, res){
    const {number} =req.params
    const {product} =req.params
    const laFact = number
    const elProd = product
    ModBill.findOne({number:laFact},function(err,factura){
        if(err) return res.send(500, err.message);
        const aux = factura.details;
        if(factura!=null){
            for(var i=0; i<aux.length;i++){
                if(aux[i].product==elProd){
                    aux.splice(i, 1)
                }
            }
            factura.details = aux
            factura.save(function (err, factura){
                if(err) return res.send(500, err.message);
                console.log("/DELETE/BorrarDetalle/"+laFact+"/"+elProd)
                res.status(200).jsonp("Se ha hecho la modificación en la factura con number: "+laFact);
            })          
        }else{
            res.status(200).jsonp("Factura no existente");
        }
    })
}
exports.BuscarDetalle = function (req, res){
    const {number} =req.params
    const {product} =req.params
    const laFact = number
    const elProd = product
    ModBill.findOne({number:laFact},function(err,factura){
        if(err) return res.send(500, err.message);
        const aux = factura.details;
        if(factura!=null){
            console.log("/GET/BuscarDetalle/"+laFact+"/"+elProd)
            for(var i=0; i<aux.length;i++){
                if(aux[i].product==elProd){
                    res.status(200).jsonp(aux[i]);
                }
            }        
        }else{
            res.status(200).jsonp("Factura no existente");
        }
    })   
}