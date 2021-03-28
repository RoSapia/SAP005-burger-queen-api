const database = require('../db/models')


class UsersController {
    static async getAllUsers(req, res) {
        const users = await database.Users.findAll()
        return res.status(200).json(users)
    }

    static async postUser(req, res) {        
        const user = await database.Users.create({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            restaurant: req.body.restaurant
        })
        return res.status(200).json({'id': user.id})
    }

    static async getUser(req, res) {
      const user = await database.Users.findAll(
        {where: {id: req.params.uid}}
      )

      if(user.length > 0) {
        return res.status(200).json({'response': user[0].dataValues})
      } else {
        return res.status(404).json({'message': 'User not found'})
      }

    }

    static async putUser(req, res) {
      const user = await database.Users.update(
        req.body, {where: {id: req.params.uid}}
      )

      return res.status(200).json({'message': 'User'})
    }

    static async deleteUser(req, res) {
      const user = await database.Users.destroy(
        {where: {id: req.params.uid}}
      )
      console.log(user)
      if(user != 0){
      return res.status(200).json({'message': 'User deleted'})
    } else {
      return res.status(404).json({'message': 'User not found'})
    }
    }
}