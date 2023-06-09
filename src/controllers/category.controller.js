const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categoryService.createCategory({ name });

  if (newCategory.type) {
    return res.status(newCategory.type).json(newCategory.message);
  }

  return res.status(201).json(newCategory);
};

const getAllCategories = async (_req, res) => {
  const categories = await categoryService.getAllCategories();

  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};