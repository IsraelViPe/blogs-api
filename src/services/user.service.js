const { User } = require('../models');
const newUserInputValidation = require('./validation/newUserInputValidation');
const { generateToken } = require('../utils/JWT');

const createUser = async (infoUser) => {
    const { displayName, email, image } = infoUser;
    const { error } = newUserInputValidation(infoUser);
    if (error) {
        error.status = 400;
        return error;
    }
    const userAlreadyExists = await User.findOne({ where: { email: infoUser.email } });
    if (userAlreadyExists) {
        const err = new Error('User already registered');
        err.status = 409;
        return err;
    }
    const newUser = await User.create({ ...infoUser });

    if (!newUser) return new Error('Não foi possível cadastrar o novo usuário');
    
    const token = generateToken({ displayName, email, image });
    return { token };
};

const findAll = () => User.findAll({ attributes: { exclude: ['password'] } });

const findById = async (id) => {
   const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
   if (!user) {
    const error = new Error('User does not exist');
    error.status = 404;
    throw error;
   }
   return user;
};

const deleteUser = async (tokenUserId) => {
    try {
        await User.destroy({ where: { id: tokenUserId } });
    } catch (e) {
        console.error(e);
    }
};

module.exports = {
    createUser,
    findAll,
    findById,
    deleteUser,
};