const {sequelize} = require('../config/config.js');
// Bên kia Mongoose bên này PostgreSQL
const { Sequelize, DataTypes } = require('sequelize');
const pool = new Sequelize(sequelize.database, sequelize.username, sequelize.password, {
    host: sequelize.host,
    dialect: sequelize.dialect
});
const Product = pool.define('products', {
    // Model attributes are defined here
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    product_name: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    brand: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
},{
    timestamps: false,
});
Product.sync();

module.exports = Product;