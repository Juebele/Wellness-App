const router = require('express').Router();
const mpRoutes = require('./mealplan-routes');
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);
router.use('/mealplan', mpRoutes);

module.exports = router;