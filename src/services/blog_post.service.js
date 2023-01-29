const { BlogPost, sequelize, Category, PostCategory } = require('../models');
const newPostValidation = require('./validation/newPostValidation');

const categoriesExists = async (categoriesIds) => {
    const categoriesFound = await Category.findAll({ where: { id: categoriesIds } });
    
    if (categoriesFound.length !== categoriesIds.length) {
        const error = new Error('one or more "categoryIds" not found');
        error.status = 400;
        throw error;
    }
}; 

const validationInput = (inputs) => {
   const { error } = newPostValidation(inputs);
    if (error) {
        error.status = 400;
        error.message = 'Some required fields are missing';
        throw error;
    }   
}; 

const createPost = async (userId, { title, content, categoryIds }) => {
    validationInput({ title, content, categoryIds });
   await categoriesExists(categoryIds);

     const result = await sequelize.transaction(async (t) => {
        try {
            const newPost = await BlogPost.create({
                title, content, userId, published: new Date(), updated: new Date(),  
            }, { transaction: t });
            await PostCategory.bulkCreate(categoryIds
                .map((category) => ({ postId: newPost.id, categoryId: category })),
                { transaction: t });
                return newPost; 
        } catch (e) { 
            console.error(e);
        }
    });
    return result;    
};

module.exports = {
    createPost,
};