const express = require('express');
const categoryController = require('../controllers/category.controller');
const { validateJwt } = require('../middleware/tokenValidator');

const router = express.Router();

router.post('/categories', validateJwt, categoryController.createCategory);
router.get('/categories', validateJwt, categoryController.getAllCategories);

module.exports = router;