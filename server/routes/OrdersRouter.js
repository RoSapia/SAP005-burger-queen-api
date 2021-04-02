const { Router } = require('express')
const OrdersController = require('../controller/OrdersController')
const router = Router()

//aqui vai todas as requisições de USERS
router.get("/", OrdersController.getAllOrders)
router.get("/:orderId",  OrdersController.getOrder)
router.post("/", OrdersController.postOrder)
router.put("/:orderId", OrdersController.putOrder)
router.delete("/:orderId", OrdersController.deleteOrder)

module.exports = router