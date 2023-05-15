const { User } = require('../models');

const getUser = async () => {
    const getAll = await User.findAll({ attributes: { exclude: 'password' } });

    return getAll;
};

const getUserById = async (id) => {
    const getById = await User.findOne({ WHERE: id, attributes: { exclude: 'password' } });

    return getById;
};

module.exports = {
    getUser,
    getUserById,
};