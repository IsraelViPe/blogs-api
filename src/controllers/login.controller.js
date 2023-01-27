const service = require('../services');

const authLogin = async (req, res, next) => {
        const { email, password } = req.body;
        const response = await service.authentication(email, password);
       
        if (response.status) return next(response);

        res.status(200).json(response);
};

module.exports = {
    authLogin,
};