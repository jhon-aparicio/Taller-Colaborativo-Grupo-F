'use strict'

const productController = require('../controllers/product')
const billController = require('../controllers/bill')

const express = require('express')
const { model } = require('mongoose')

const router = express.Router()

//GET para listar productos
router.get('/ListaProd',productController.ListaProductos)
//POST para crear productos
router.post('/CrearProducto',productController.CrearProducto)
//DELETE para eliminar productos por ID
router.delete('/BorrarProducto/:idProduct', productController.BorrarProducto)
//GET para busar un producto por id
router.get('/BuscarProducto/:idProduct',productController.BuscarProducto)
//PUT para modificar un producto
router.put('/ModificarProducto/:idProduct',productController.ModificarProducto)
//GET para saber si el producto ya expiro
router.get('/isExpired/:idProduct',productController.isExpired)

//GET para listar facturas
router.get('/ListaFactura',billController.ListaFactura)
//POST para crear facturas
router.post('/CrearFactura',billController.CrearFactura)
//DELETE para eliminar facturas por ID
router.delete('/BorrarFactura/:number', billController.BorrarFactura)
//GET para busar una factura por id
router.get('/BuscarFactura/:number',billController.BuscarFactura)
//PUT para modificar factura
router.put('/ModificarFactura/:number', billController.ModificarFactura)

//GET para listar detalles de una factura
router.get('/ListaDetalle/:number', billController.ListaDetalle)
//POST para crear detalles
router.post('/AddDetail/:number', billController.AddDetail)
//DELETE para eliminar un detalle de una factura por idProduct
router.delete('/BorrarDetalle/:number/:product', billController.BorrarDetalle)
//GET para buscar una factura por id y el id del producto
router.get('/BuscarDetalle/:number/:product', billController.BuscarDetalle)

module.exports = router;