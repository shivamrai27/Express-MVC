import express from 'express';
const router = express.Router();
import {
    getAllProducts,
    getProductbyId,
    createNewProduct,
    updateProduct,
    deleteProduct
} from '../controllers/products.js';
router.route('/products').get(getAllProducts)
router.route('/product').get(getProductbyId)
router.route('/new/product').post(createNewProduct)
router.route('/updateproduct').get(updateProduct)
router.route('/deleteproduct').get(deleteProduct)

export default router;