const jwt = require('jsonwebtoken');
const config = require('../config/config.js');

const generateToken = (username,userId, secret = config.jwt.secret) => {
    const payload = {
        username: username, 
        id: userId,
    };
    return jwt.sign(payload, secret);
};

const generatePayload = async (token) => {
    const payload = jwt.verify(token, config.jwt.secret);
    if (!payload) {
      throw new Error('Khong hop le');
    }
    return payload;
};

module.exports = {
    generateToken,
    generatePayload,
};