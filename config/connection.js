const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.WELLNESS_DB) {
    sequelize = new Sequelize(process.env.WELLNESS_DB);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        '',
        {
            host: '127.0.0.1',
            dialect: 'mysql',
            port: 3306
        }
    );
}

module.exports = sequelize;