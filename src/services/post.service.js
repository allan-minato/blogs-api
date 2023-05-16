const { BlogPost, User, Category } = require('../models');

const getAllPosts = async () => {
    const categories = await BlogPost.findAll({
        include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories', through: { attributes: [] } },
        ],
        
      });

    return categories;
  };

  module.exports = {
    getAllPosts,
  };