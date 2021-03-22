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
    const id = req.params.id_product
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
}

module.exports = { getAllProducts, getProduct }

