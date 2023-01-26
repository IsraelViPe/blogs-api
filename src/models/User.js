const userModel = (Sequelize, DataTypes) => {
    const User = Sequelize.define('User', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
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
            type: Sequelize.STRING 
        },
    },{
        timestamps: false,
        underscored: true,
    });

    return User;
} 

module.exports = userModel;