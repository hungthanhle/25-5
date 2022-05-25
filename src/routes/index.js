const express = require('express');
const router = express.Router();

const productRoute = require('./product.route.js');
const authRoute = require('./auth.route.js');

const defaultRoutes = [
    {
      path: '/login',
      route: authRoute,
    },
    {
      path: '/product',
      route: productRoute,
    },
];
// first test
// router.use('/product',productRoute);
defaultRoutes.forEach((arr) => {
    router.use(arr.path, arr.route);
});

module.exports = router;