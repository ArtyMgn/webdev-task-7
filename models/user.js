'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        login: DataTypes.STRING
    },
    {
        timestamps: true,
        indexes: [{ unique: true, fields: ['login'] }]
    });
};
