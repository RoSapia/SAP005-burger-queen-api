const database = require('../db/models')

class UsersController {
    static async getAllUsers(req, res) {
        const users = await database.Users.findAll()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((error) => {
            res.status(400).json({ code: 400, message: 'Missing required data' })
        })
    }

    static async postUser(req, res) {
        const user = await database.Users.create({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            restaurant: req.body.restaurant
        })
        .then((result) => {
            res.status(201).json({ code: 201, result })
        })
        .catch((error) => {
            res.status(400).json({ code: 400, message: 'Missing required data' })
        })

    }

    static async getUser(req, res) {
        const uid = req.params.uid
        const user = await database.Users.findAll(
            { where: { id: req.params.uid } }
        )
        .then((result) => {
            if (result == 0) {
                throw new Error('Id: ' + uid + ' not found')
            }
            res.status(200).json({ code: 200, result })
        })
        .catch((error) => {
            res.status(404).json({ code: 404, error: error.message })
        })

    }

    static async putUser(req, res) {
        const updatedUser = req.body
        const user = await database.Users.update(
            req.body, { where: { id: req.params.uid } }
        )
        .then((result) => {
            res.status(201).json({ code: 201, updatedUser })
        })
        .catch((error) => {
            res.status(400).json({ code: 400, message: 'Missing required data' })
        })
    }

    static async deleteUser(req, res) {
        const uid = req.params.uid
        const user = await database.Users.destroy(
            { where: { id: req.params.uid } }
        )
        .then((result) => {
            if (result == 0) {
                throw new Error('Id: ' + uid + ' not found')
            }
            res.status(200).json({ code: 200, result })
        })
        .catch((error) => {
            res.status(404).json({ code: 404, error: error.message })
        })
    }
}

module.exports = UsersController