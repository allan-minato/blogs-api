/**
 * 
 * @param {import ('sequelize')} Sequelize 
 * @param {import('sequelize').DataTypes} DataTypes
 */

const Users = (Sequelize, DataTypes) => {
    const userTable = Sequelize.define('User', {
        id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,},  
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        tableName: 'users',
        timestamps: false,
        underscored: true,
    })
    return userTable;
};

module.exports = Users;