/**
 * 
 * @param {import ('sequelize')} Sequelize 
 * @param {import('sequelize').DataTypes} DataTypes
 */

const PostCategorys = (Sequelize, DataTypes) => {
    const categoryTable = Sequelize.define('PostCategory', {
        postId: { type: DataTypes.INTEGER, primaryKey: true },
        categoryId:{ type: DataTypes.INTEGER, primaryKey: true },
      },
      {
        timestamps: false,
        underscored: true,
        tableName: 'posts_categories'
      },
    );
    
    categoryTable.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        foreignKey: 'post_id',
        through: categoryTable,
        otherKey:'category_id'
    })
        models.Category.belongsToMany(models.BlogPost, {
        as: 'category_id',
        foreignKey: 'category_id',
        through: categoryTable,
        otherKey: 'post_id',
    })
}
      return categoryTable;
};

module.exports = PostCategorys;