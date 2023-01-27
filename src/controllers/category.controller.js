const service = require('../services/category.service');

const createCategory = async (req, res) => {
    const newCategory = await service.createCategory(req.body);
    res.status(201).json(newCategory);
}; 

const findAllCategory = async (req, res) => {
    const response = await service.findAllCategory();

    res.status(200).json(response);
}; 

module.exports = {
    createCategory,
    findAllCategory,
};