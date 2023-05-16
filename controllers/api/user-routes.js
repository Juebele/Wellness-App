const router = require('express').Router();
const { User } = require('../../models');

//localhost:3001/signup
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

//localhost:3001/login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
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