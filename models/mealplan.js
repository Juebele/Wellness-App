const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mealplan extends Model { }

Mealplan.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, 
        },
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        breakfast: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lunch: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        dinner: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        dayid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Mealplan',
    }
);


module.exports = Mealplan;