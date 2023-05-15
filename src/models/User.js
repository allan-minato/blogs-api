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
    userTable.associate = (models) => {
        userTable.hasMany(models.BlogPost, {
            foreignKey: 'user_id',
            as: 'users',
        })
    }
    return userTable;
};

module.exports = Users;