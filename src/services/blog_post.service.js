const { BlogPost, sequelize, Category, PostCategory } = require('../models');

const createPost = async (userId, { title, content, categoryIds }) => {
    const t = await sequelize.transaction();
    const categoriesExists = await Category.findAll({ where: { id: categoryIds } });
    
    if (categoriesExists.length !== categoryIds.length) {
        const error = new Error('one or more \"categoryIds\" not found');
        error.status = 400;
        throw error;
    }   
    try {
        const newPost = await BlogPost.create({
            title, content, userId, published: new Date(), updated: new Date(),  
        }, { transaction: t });

        console.log(newPost);

       const b = await PostCategory.bulkCreate(categoryIds
            .map((category) => ({ postId: newPost.id, categoryId: category })),
            { transaction: t });

            console.log(categoryIds
                .map((category) => ({ postId: newPost.id, categoryId: category })));
            return newPost;
    } catch (e) { 
        console.error(e);
    }
};

module.exports = {
    createPost,
};