/**
 * 
 * @param {import ('sequelize')} Sequelize 
 * @param {import('sequelize').DataTypes} DataTypes
 */

const PostCategorys = (Sequelize, DataTypes) => {
    const categoryTable = Sequelize.define('PostCategory', {
    post_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    });
    categoryTable.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
          foreignKey: 'post_id',
          through: categoryTable,
          as: 'post_id',
    })
        models.Category.belongsToMany(models.BlogPost, {
          foreignKey: 'category_id',
          through: categoryTable,
          as: 'category_id',
    })
}
      return categoryTable;
};

module.exports = PostCategorys;