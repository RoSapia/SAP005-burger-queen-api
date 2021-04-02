// aqui vai o código que acessa o banco de dados
const database = require('../db/models')

class ProductsController {
    static async getAllProducts(req, res) {
        const products = await database.Products.findAll()
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((error) => {
                res.status(400).json({ code: 400, message: 'Missing required data' })
            })
    }

    static async postProduct(req, res) {
        const product = await database.Products.create({
            productsName: req.body.productsName,
            flavor: req.body.flavor,
            complement: req.body.complement,
            price: req.body.price,
            image: req.body.image,
            type: req.body.type,
            subtype: req.body.subtype
        })
            .then((result) => {
                res.status(201).json({ code: 201, result })
            })
            .catch((error) => {
                res.status(400).json({ code: 400, message: 'Missing required data' })
            })

    }
    static async getProduct(req, res) {
        const id = req.params.productid
        const product = await database.Products.findAll(
            { where: { id: id } }
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

    static async putProduct(req, res) {
        const updated = req.body
        const product = await database.Products.update(
            updated, { where: { id: req.params.productid } }
        )
        .then((result) => {
            res.status(201).json({ code: 201, updated })
        })
        .catch((error) => {
            res.status(400).json({ code: 400, message: 'Missing required data' })
        })
    }

    static async deleteProduct(req, res) {
        const id = req.params.productid
        const product = await database.Products.destroy(
            { where: { id: id } }
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
module.exports = ProductsController