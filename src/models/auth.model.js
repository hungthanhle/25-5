const {sequelize} = require('../config/config.js');
// Bên kia Mongoose bên này PostgreSQL
const { Sequelize, DataTypes } = require('sequelize');
const pool = new Sequelize(sequelize.database, sequelize.username, sequelize.password, {
    host: sequelize.host,
    dialect: sequelize.dialect
});
const User = pool.define('users', {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    role: {
        type: DataTypes.STRING
    },
},{
    timestamps: false,
});
User.sync();

module.exports = User;