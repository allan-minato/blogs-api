const { Category } = require('../models');

const createCategory = async ({ name }) => {
  if (!name) return { type: 400, message: { message: '"name" is required' } };

  const createdCategory = await Category.create({ name });
  return createdCategory;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  createCategory,
  getAllCategories,
};