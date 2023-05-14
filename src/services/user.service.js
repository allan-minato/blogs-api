const { User } = require('../models');

const getUser = async () => {
    const getAll = await User.findAll({ attributes: { exclude: 'password' } });

    return getAll;
};

module.exports = {
    getUser,
};