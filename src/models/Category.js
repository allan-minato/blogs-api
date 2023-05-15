/**
 * 
 * @param {import ('sequelize')} Sequelize 
 * @param {import('sequelize').DataTypes} DataTypes
 */

const Categorys = (Sequelize, DataTypes) => {
    const categoryTable = Sequelize.define('Category', {
        id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,},  
        name: DataTypes.STRING,
    },
    {
        underscored: true,
        timestamps: false,
        tableName: 'categories',
      })
    return categoryTable;
};

module.exports = Categorys;