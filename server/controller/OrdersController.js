// aqui vai o código que acessa o banco de dados
const database = require('../db/models')

class OrdersController {
    static async getAllOrders(req, res) {
        const orders = await database.Orders.findAll()
        return res.status(200).json(orders)
    }

    static async postOrder(req, res) {

        const order = await database.Orders.create({
            userId: req.body.userId,
            clientName: req.body.clientName,
            table: req.body.table,
            status: req.body.status
        })
        const orderId = order.id
        const productsOrders = await database.ProductsOrders.create({
            orderId: orderId,
            productId: req.body.productId,
            qtd: req.body.qtd
        })
        return res.status(201).json({ order, productsOrders })

    }
    static async getOrder(req, res) {
        const orderId = req.params.orderId
        const order = await database.Orders.findAll(
            { where: { id: orderId } }
        )
            .then((result) => {
                if (result == 0) {
                    throw new Error('Id: ' + orderId + ' not found')
                }
                res.status(200).json({ code: 200, result })
            })
            .catch((error) => {
                res.status(404).json({ code: 404, error: error.message })
            })

    }

    static async putOrder(req, res) {
        const updated = req.body
        const order = await database.Orders.update(
            updated, { where: { id: req.params.orderId } }
        )
            .then((result) => {
                res.status(201).json({ code: 201, updated })
            })
            .catch((error) => {
                res.status(400).json({ code: 400, message: 'Missing required data' })
            })
    }
    static async deleteOrder(req, res){
        const id = req.params.orderId
        const product = await database.Orders.destroy(
            { where: { id: req.params.orderId } }
        )
            .then((result) => {
                if (result == 0) {
                    throw new Error('Id: ' + id + ' not found')
                }
                res.status(200).json({ code: 200, result })
            })
            .catch((error) => {
                res.status(404).json({ code: 404, error: error.message })
            })
    }
}


module.exports = OrdersController