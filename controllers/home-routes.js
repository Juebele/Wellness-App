const router = require('express').Router();
const {User, Mealplan} = require('../models/index.js');

router.get ('/', async (req, res) => {
    try {
        const dbUserData = await User.findAll({});
        const mappedData = dbUserData.map((user) => user.get({plain: true}))
        console.log(mappedData);
        // res.json(dbUserData);
        //res.render to populate the main
        res.render('homepage', {userid:mappedData[0].id});

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;