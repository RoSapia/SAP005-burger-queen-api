// aqui vai o código que acessa o banco de dados
const database = require('../db/models')
//RETORNA TODOS OS USUÁRIOS

class UsersController {
    static async getAllUsers(req, res) {
        const users = await database.Users.findAll()
        return res.status(200).json(users)
    }

    static async postUser(req, res) {
        const user = await database.Users.create({
            "name": req.body.userName,
            "email": req.body.email,
            "password": req.body.password,
            "role": req.body.role,
            "restaurant": req.body.restaurant
        })
        return res.status(200).json(user)
    }
}

/*

//RETORNA UM USUÁRIO PELO ID
const getUser = (req, res) => {
    console.log("get user, chamada =)")
    const userId = req.params.uid
    if (userId === 'desconhecido') {
        res.status(404).send({
            message: "ID desconhecido, user not found"
        })
    } else {
        res.status(200).send({
            message: "Retorna um usuário pelo ID",
            id: userId
        })
    }
};

const postUser = (req, res) => {
    /*const user = {
        "email": req.body.email,
        "password": req.body.password,
        "role": req.body.role,
        "restaurant": req.body.restaurant,
        "name": req.body.name
    }*/
/* console.log("post user chamada ;)")
 res.status(201).send({
     message: "Insere um novo user",
     //userCriado: user
 })
};

const putUser = (req, res) => {
 console.log("update user chamada ;)")
 const userId = req.params.uid
 res.status(201).send({
     message: "Atualiza um user",
     id: userId
 })
};

const deleteUser = (req, res) => {
 const userId = req.params.uid
 console.log("delete user chamada ;)")
 res.status(200).send({
     message: "exclui um user",
     id: userId
 })
};

module.exports = { getAllUsers, getUser, postUser, putUser, deleteUser }
*/

module.exports = UsersController