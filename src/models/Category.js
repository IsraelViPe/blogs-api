const categoryModel = (Sequelize, DataTypes) => {
    const Category = Sequelize.define('Category', {
       id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
       },
       name: {
        type: DataTypes.STRING,
        allowNull: false
       }
    }, {
        timestamps:false,
        tableName: 'categories'      
    })

    return Category
}

module.exports = categoryModel;