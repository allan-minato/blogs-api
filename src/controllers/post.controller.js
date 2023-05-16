const blogPostService = require('../services/post.service');

const getAllPosts = async (_req, res) => {
    const posts = await blogPostService.getAllPosts();

    return res.status(200).json(posts);
};

module.exports = {
    getAllPosts,
};