const { Router } = require('express')
const UsersController = require('../controller/UsersController')
const router = Router()

//aqui vai todas as requisições de USERS
router.get("/", UsersController.getAllUsers)
/*router.get("/:uid",  UsersController.getUser)
router.post("/", UsersController.postUser)
router.put("/:uid", UsersController.putUser)
router.delete("/:uid", UsersController.deleteUser)*/

module.exports = router