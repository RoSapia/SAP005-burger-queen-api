const { Router } = require('express')
const ProductsController = require('../controller/ProductsController')
const router = Router()

// aqui vai as requisições de products
router.get("/", ProductsController.getAllProducts)
router.get("/:id_product", ProductsController.getProduct)

module.exports = router


