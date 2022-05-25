const express = require('express');
const AuthController = require('../controllers/auth.controller');

const router = express.Router();

router.route('/').post(AuthController.AuthLog1st);

module.exports = router;