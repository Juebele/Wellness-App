const User = require('./User');
const Mealplan = require('./mealplan');

//associations
User.hasMany(Mealplan, {
    foreignKey: 'userid'
})

Mealplan.belongsTo(User, {
    foreignKey: 'userid'
})


module.exports = { User, Mealplan };