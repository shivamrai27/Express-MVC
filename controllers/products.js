import { products } from '../db.js'
export const getAllProducts = function (req, res) {
    res.json(products)
}

export const getProductbyId = function (req, res) {
    res.json("product by id")
}

export const createNewProduct = function (req, res) {
    res.json("new product is added")
}

export const updateProduct = function (req, res) {
    res.json("product is updated")
}

export const deleteProduct = function (req, res) {
    res.json("product is deleted")
}

