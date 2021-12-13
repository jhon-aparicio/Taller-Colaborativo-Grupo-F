'use strict'

const productController = require('../controllers/product')

const express = require('express')
const { model } = require('mongoose')

const router = express.Router()

router.get('/ListaProd',productController.ListaProductos)

module.exports = router;