// aqui vai o código que acessa o banco de dados

//RETORNA TODOS OS USUÁRIOS
const getAllUsers = (req, res) => {
    console.log("get all users, chamada =)")
    res.status(200).send({
        message: "Retorna todos os Users"
    })
};

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
    console.log("post user chamada ;)")
    res.status(201).send({
        message: "Insere um novo user"
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

module.exports = { getAllUsers, getUser, postUser, putUser , deleteUser}