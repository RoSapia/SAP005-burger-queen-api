// aqui vai o código que acessa o banco de dados

//RETORNA TODOS OS USUÁRIOS
const getAllOrders = (req, res) => {
    console.log("get all Orders, chamada =)")
    res.status(200).send({
        message: "Retorna todos os Orders"
    })
};

//RETORNA UM USUÁRIO PELO ID
const getOrder = (req, res) => {
    console.log("get order, chamada =)")
    const orderId = req.params.id_order
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
    console.log("post order chamada ;)")
    res.status(201).send({
        message: "Insere um novo order"
    })
};

const putOrder = (req, res) => {
    console.log("update order chamada ;)")
    const orderId = req.params.id_order    
    res.status(201).send({
        message: "Atualiza um order",
        id: orderId
    })
};

const deleteOrder = (req, res) => {
    const orderId = req.params.id_order
    console.log("delete order chamada ;)")
    res.status(200).send({
        message: "exclui um order",
        id: orderId
    })
};

module.exports = { getAllOrders, getOrder, postOrder, putOrder , deleteOrder}