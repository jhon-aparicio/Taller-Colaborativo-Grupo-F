'use strict'

const productController = require('../controllers/product')

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
 
module.exports = router;