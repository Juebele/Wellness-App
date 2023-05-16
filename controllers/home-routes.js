const router = require('express').Router();
const {User, Mealplan} = require('../models/index.js');

router.get ('/',  (req, res) => {
    try {
        const dbUserData =  User.findAll({});

        const users = dbUserData.map((user) =>
        user.get({ plain: true})
        );
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

module.exports = router;