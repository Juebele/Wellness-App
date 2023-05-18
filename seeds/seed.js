const sequelize = require('../config/connection');
const seedmealplan = require('./mealplanData');
const seedUserData = require('./userData');
const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUserData();
    await seedmealplan();
    process.exit(0);
};

seedAll();