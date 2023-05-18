const express = require('express');
const blogPostController = require('../controllers/post.controller');
const { validateJwt } = require('../middleware/tokenValidator');

const router = express.Router();

router.get('/post', validateJwt, blogPostController.getAllPosts);
router.get('/post/:id', validateJwt, blogPostController.getPostById);

module.exports = router;