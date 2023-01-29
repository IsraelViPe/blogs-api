const userModel = (Sequelize, DataTypes) => {
    const User = Sequelize.define('User', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING 
        },
    },{
        timestamps: false,
        underscored: true,
    });

    User.associate = ({BlogPost}) => {
        User.hasMany(BlogPost, {
            foreignKey: 'userId', as: 'blogs'
        })
    }

    return User;
} 

module.exports = userModel;