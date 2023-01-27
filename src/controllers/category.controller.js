const service = require('../services/category.service');

const createCategory = async (req, res) => {
    const newCategory = await service.createCategory(req.body);
    res.status(201).json(newCategory);
}; 

module.exports = {
    createCategory,
};