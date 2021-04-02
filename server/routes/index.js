const { Router } = require('express')
const ExampleRouter = require("./ExampleRouter")
const ProductsRouter = require("./ProductsRouter")
const UsersRouter = require("./UsersRouter")
const OrdersRouter = require("./OrdersRouter")
const router = Router()

// aqui vai todas as rotas
router.use('/example', ExampleRouter);
router.use('/products', ProductsRouter);
router.use('/users', UsersRouter);
router.use('/orders', OrdersRouter)


module.exports = router
