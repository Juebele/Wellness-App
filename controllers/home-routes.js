const router = require('express').Router();

const {User, Mealplan} = require('../models');

router.get ('/', async (req, res) => {
    const DB_USER = await User.findAll();
    console.log(DB_USER);
});

module.exports = router;