const { validateToken } = require('../utils/JWT');

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;
    const response = await validateToken(token);
   
    if (response.status) return next(response);
   
    res.user = response;
    next();
};