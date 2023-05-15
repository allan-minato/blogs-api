/**
 * 
 * @param {import ('sequelize')} Sequelize 
 * @param {import('sequelize').DataTypes} DataTypes
 */

const BlogPosts = (Sequelize, DataTypes) => {
    const categoryTable = Sequelize.define('BlogPost', {
        id: { type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },  
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    });

    categoryTable.associate = (models) => {
        categoryTable.belongsTo(models.User, {
          foreignKey: 'user_id',
          as: 'user',
        })
      }
      return categoryTable;
};

module.exports = BlogPosts;