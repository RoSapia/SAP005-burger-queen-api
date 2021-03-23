// aqui vai o código que acessa o banco de dados

//RETORNA TODOS OS PRODUTOS
const getAllProducts = (req, res, next) => {
    console.log("get all products chamada =)")
    res.status(200).send({
        message: "Retorna todos os produtos"
    })
};

//RETORNA UM PRODUTO CHAMADO PELO ID
const getProduct = (req, res, next) => {
    const id = req.params.productid
    console.log("GET Product chamada ;)")
    if (id === 'desconhecido') {
        res.status(404).send({
            message: 'ID desconhecido',
            id: id
        })
    } else {
        res.status(200).send({
            message: 'Você passou um id',            
        });
    }
};

const postProduct = (req, res) => {
    const product = {
        "name": req.body.name,
        "price": req.body.price
    }
    console.log("post product chamada ;)")
    res.status(201).send({
        message: "Insere um novo product",
        produtoCriado: product
    })
};

const putProduct = (req, res) => {
    console.log("update product chamada ;)")
    const productId = req.params.productid    
    res.status(201).send({
        message: "Atualiza um product",
        id: productId
    })
};

const deleteProduct = (req, res) => {
    const productId = req.params.productid
    console.log("delete product chamada ;)")
    res.status(200).send({
        message: "exclui um product",
        id: productId
    })
}

module.exports = { getAllProducts, getProduct, postProduct, putProduct, deleteProduct }

