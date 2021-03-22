const { Router } = require('express')
const OrdersController = require('../controller/OrdersController')
const router = Router()

//aqui vai todas as requisições de USERS
router.get("/", OrdersController.getAllOrders)
router.get("/:id_user",  OrdersController.getOrder)
router.post("/", OrdersController.postOrder)
router.put("/:id_user", OrdersController.putOrder)
router.delete("/:id_user", OrdersController.deleteOrder)

module.exports = router