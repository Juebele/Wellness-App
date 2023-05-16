const sequelize = require('../config/connection');

const seedmealplan = require('./mealplanData');


const seedUserData = require('./userData');

const seedAll = async () => {
    await sequelize.sync({ force: true});

    await seedmealplan();
    await seedUserData();
    



    process.exit(0);
};

seedAll();