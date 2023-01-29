module.exports = (Sequelize, DataTypes) => {
    const PostCategory= Sequelize.define('PostCategory', 
    {
        postId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER,
    }, 
    {
        timestamps: false,
        underscored: true,
        tableName: 'posts_categories',
    });
    
    PostCategory.associate = (model) => {
        model.BlogPost.belongsToMany(model.Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId'     
        })

        model.Category.belongsToMany(model.BlogPost, {
        as: 'posts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId'     
        })
    }
   
    return PostCategory;

}