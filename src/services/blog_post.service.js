const { BlogPost, sequelize, Category, PostCategory, User } = require('../models');
const newPostValidation = require('./validation/newPostValidation');

const categoriesExists = async (categoriesIds) => {
    const categoriesFound = await Category.findAll({ where: { id: categoriesIds } });
    
    if (categoriesFound.length !== categoriesIds.length) {
        const error = new Error('one or more "categoryIds" not found');
        error.status = 400;
        throw error;
    }
}; 

const postExists = async (id) => {
    const post = await BlogPost.findOne({ where: { id } });
    if (!post) {
        const error = new Error('Post does not exist');
        error.status = 404;
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

const isPostOwner = async (id, userId) => {
    const post = await BlogPost.findOne({ where: { id } });
    
    if (userId !== post.userId) {
        const error = new Error('Unauthorized user');
        error.status = 401;
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

const findAllPost = async () => {
    const postsList = await BlogPost.findAll({
        include: [
            {
                model: User,
                as: 'user',
                attributes: { exclude: ['password'] },    
            },
            {
                model: Category,
                as: 'categories',
                through: {
                attributes: [],    
                },
            },
        ],
    });
    if (!postsList) throw new Error('Erro inesperado. Por favor, tente mais tarde'); 
    return postsList;
};

const findPostById = async (id) => {
    await postExists(id);
    const post = await BlogPost.findOne({
        where: { id },
        include: [{ model: User,
                as: 'user',
                attributes: { exclude: ['password'] },    
            },
            {
                model: Category,
                as: 'categories',
                through: {
                attributes: [],    
                },
            },
        ],
    });
    if (!post) throw new Error('Erro inesperado. Por favor, tente mais tarde'); 
    return post;
};

const updatePost = async (id, userId, { title, content }) => {
    if (!title || !content) {
        const error = new Error('Some required fields are missing');
        error.status = 400;
        throw error;
    }

    await isPostOwner(id, userId);

    try {
        await BlogPost.update(
            { title, content },
            { where: { id } },        
        );
        const updatedPost = await findPostById(id);
        return updatedPost;
    } catch (e) {
        console.error(e);
    }
};

const deletePost = async (userId, id) => {
    await postExists(id);
    await isPostOwner(id, userId);

    try {
        await BlogPost.destroy({ where: { id } });
    } catch (e) {
        console.error(e);
    }
};

module.exports = {
    createPost,
    findAllPost,
    findPostById,
    updatePost,
    deletePost,
};