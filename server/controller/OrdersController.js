// aqui vai o código que acessa o banco de dados
const database = require('../db/models')

class OrdersController {
    static async getAllOrders(req, res){
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
        return res.status(200).json({ 'id': order.id })
    }
    static async getOrder(req, res) {
        const order = await database.Orders.findAll(
            { where: { id: req.params.orderId } }
        )
        if (order.length > 0) {
            return res.status(200).json({ 'response': order[0].dataValues })
        } else {
            return res.status(404).json({ 'message': 'Order not found' })
        }
    }    
}

/*const getAllOrders = (req, res) => {
    console.log("get all Orders, chamada =)")
    res.status(200).send({
        message: "Retorna todos os Orders"
    })
};

//RETORNA UM USUÁRIO PELO ID
const getOrder = (req, res) => {
    console.log("get order, chamada =)")
    const orderId = req.params.orderId
    if (orderId === 'desconhecido') {
        res.status(404).send({
            message: "ID desconhecido, order not found"
        })
    } else {
        res.status(200).send({
            message: "Retorna um usuário pelo ID",
            id: orderId
        })
    }
};

const postOrder = (req, res) => {
    /*const order = {
        {
            "client": req.body.clientName,
            "table": req.body.table,
            "products": [
              {
                "id": req.body.productId,
                "qtd": req.body.qtde
              }
            ]
          }
    }*//*
    console.log("post order chamada ;)")
    res.status(201).send({
        message: "Insere um novo order"
    })
};

const putOrder = (req, res) => {
    console.log("update order chamada ;)")
    const orderId = req.params.orderId    
    res.status(201).send({
        message: "Atualiza um order",
        id: orderId
    })
};

const deleteOrder = (req, res) => {
    const orderId = req.params.orderId
    console.log("delete order chamada ;)")
    res.status(200).send({
        message: "exclui um order",
        id: orderId
    })
};

module.exports = { getAllOrders, getOrder, postOrder, putOrder , deleteOrder}
*/

module.exports = OrdersController