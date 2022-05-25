const express = require('express');
const AuthController = require('../controllers/auth.controller');
const productController = require('../controllers/product.controller');

const router = express.Router();

router.route('/').get(AuthController.AuthLog2nd,productController.getProducts);

router.route('/:id')
  .get(AuthController.AuthLog2nd,productController.getProductById)
  .post(AuthController.AuthLog2nd,productController.addProductById)
  .put(AuthController.AuthLog2nd,productController.updateProductById)
  .delete(AuthController.AuthLog2nd,productController.deleteProductById);

module.exports = router;