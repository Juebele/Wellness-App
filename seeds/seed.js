const sequelize = require('../config/connection');
const seedMealplan = require('./mealPlanData');
const seedUserData = require('./userData');

const seedAll = async () => {
    await sequelize.sync({ force: true});
    await seedMealplan();
    await seedUserData();

    process.exit(0);
};

seedAll();