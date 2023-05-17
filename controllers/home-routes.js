const router = require('express').Router();
const {User, Mealplan} = require('../models/index.js');

//localhost:3001/
//get all Users
router.get ('/', async (req, res) => {
    try {
        const dbUserData = await User.findAll({});

        const mappedData = dbUserData.map((user) => user.get({plain: true}))
        console.log(mappedData);
        // res.json(dbUserData);

        //res.render to populate the main
        res.render('homepage', {users: mappedData});

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//localhost:3001/signup
//request to create new user and put into db when user clicks sign up
router.post('/signup', async (req, res) => {
    try {
        const dbUserData = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);

    }

});




module.exports = router;