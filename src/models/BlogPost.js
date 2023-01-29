const modelBlogPost = (Sequelize, DataTypes) => {
    const BlogPost = Sequelize.define('BlogPost', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        title: {
            type: DataTypes.STRING,
        },
        content:{
            type: DataTypes.STRING,
        },
        userId : {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        published: {
            type: DataTypes.DATE,
        },
        updated: {
            type: DataTypes.DATE,
        } 
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'blog_posts',
    });
    
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey: 'userId', as: 'user'
        });
    }
   
    return BlogPost;
}

module.exports = modelBlogPost
