const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const authentication = async (email, password) => {
    if (!email || !password) {
        const error = new Error('Some required fields are missing');
        error.status = 400;
        return error;
    }
    const user = await User.findOne({ where: { email, password } });
    console.log(user);
    if (!user) {
        const error = new Error('Invalid fields');
        error.status = 400;
        return error;
    }
    const payload = { id: user.id, 
        displayName: user.displayName, 
        email: user.email, 
        image: user.image,
    }; 
    const token = generateToken(payload);
    return { token };
}; 

module.exports = {
    authentication,
};