const blogPostService = require('../services/post.service');
const { BlogPost } = require('../models');

const getAllPosts = async (_req, res) => {
    const posts = await blogPostService.getAllPosts();

    return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    const post = await blogPostService.getPostById(id);
    
    const postNotFound = await BlogPost.findOne({ where: { id } });

    if (!postNotFound) {
    return res.status(404).json({
        message: 'Post does not exist',
      });
    }
    return res.status(200).json(post);
};

module.exports = {
    getAllPosts,
    getPostById,
};