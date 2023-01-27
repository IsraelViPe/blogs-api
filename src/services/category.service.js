const { Category } = require('../models');
const categoryValidation = require('./validation/categoryValidation');

const createCategory = async (name) => {
  const { error } = categoryValidation(name);
  
  if (error) {
    error.status = 400;
    throw error;
  }
    try {
        const newCategory = await Category.create({ ...name });
        return newCategory;
    } catch (e) {
        throw new Error(e.message);
    }
};

const findAllCategory = async () => {
        const categoryList = await Category.findAll();
        if (!categoryList) {
            throw new Error();
        }
        return categoryList;
};

module.exports = {
    createCategory,
    findAllCategory,
};