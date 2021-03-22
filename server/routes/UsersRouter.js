const { Router } = require('express')
const UsersController = require('../controller/UsersController')
const router = Router()

//aqui vai todas as requisições de USERS
router.get("/", UsersController.getAllUsers)
router.get("/:id_user",  UsersController.getUser)
router.post("/", UsersController.postUser)
router.put("/:id_user", UsersController.putUser)
router.delete("/:id_user", UsersController.deleteUser)

module.exports = router