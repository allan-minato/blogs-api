/**
 * 
 * @param {import ('sequelize')} Sequelize 
 * @param {*} DataTypes 
 */

const Users = (Sequelize, DataTypes) => {
    const userTable = Sequelize.define('User', {
        id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,},  
        display_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        tableName: 'users',
        timestamps: false,
    })
    return userTable;
};

module.exports = Users;