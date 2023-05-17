/**
 * 
 * @param {import ('sequelize')} Sequelize 
 * @param {import('sequelize').DataTypes} DataTypes
 */

const BlogPosts = (Sequelize, DataTypes) => {
  const categoryTable = Sequelize.define('BlogPost', {
      id: { type: DataTypes.INTEGER,allowNull: false,autoIncrement: true, primaryKey: true,},  
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      timestamps: false,
      underscored: true,
    }
  );

    categoryTable.associate = (models) => {
        categoryTable.belongsTo(models.User, {
          foreignKey: 'userId',
          as: 'user',
        })
      }
      return categoryTable;
};

module.exports = BlogPosts;