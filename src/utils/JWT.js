const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateToken = (payload) => {
    const token = jwt.sign(payload, secret, {
        expiresIn: '1d',
        algorithm: 'HS256',
    });
    return token;
};

const validateToken = async (token) => {
    if (!token) {
        const error = new Error('Token not found');
        error.status = 401;
        return error;
    }
    try {
        const validToken = await jwt.verify(token, secret);
        return validToken;
    } catch (e) {
        const error = new Error('Expired or invalid token');
        error.status = 401;
        return error;
    }
};

module.exports = {
    generateToken,
    validateToken,
};