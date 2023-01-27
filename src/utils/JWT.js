const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateToken = (payload) => {
    const token = jwt.sign(payload, secret, {
        expiresIn: '1d',
        algorithm: 'HS256',
    });
    return token;
};

module.exports = {
    generateToken,
};