// aqui vai o código que acessa o banco de dados
const database = require('../db/models')

class ProductsController {
    static async getAllProducts(req, res) {
        const products = await database.Products.findAll()
        return res.status(200).json(products)
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
        return res.status(200).json({ 'id': product.id })
    }
    static async getProduct(req, res) {
        const product = await database.Products.findAll(
            { where: { id: req.params.productid } }
        )

        if (product.length > 0) {
            return res.status(200).json({ 'response': product[0].dataValues })
        } else {
            return res.status(404).json({ 'message': 'Product not found' })
        }
    }
    static async putProduct(req, res) {
        const product = await database.Products.update(
            req.body, { where: { id: req.params.productid } }
        )
        return res.status(200).json({ 'message': 'Product updated' })
    }
    static async deleteProduct(req, res) {
        const product = await database.Products.destroy(
            { where: { id: req.params.productid } }
        )
        if (product != 0) {
            return res.status(200).json({ 'message': 'Product deleted' })
        } else {
            return res.status(404).json({ 'message': 'Product not found' })
        }
    }
}
module.exports = ProductsController