const router = require('express').Router();
const { User, Mealplan } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findAll({});

    const mappedData = dbUserData.map((user) => user.get({ plain: true }))
    console.log(mappedData);

    //res.render to populate the main
    res.render('homepage', { users: mappedData });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {

  console.log("in the route");
  res.render('login');

})

router.post('/login', async (req, res) => {
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

router.get('/signup', (req, res) => {

  console.log("in the route");
  res.render('signup');

})

router.get('/mealplans', async (req, res) => {
  try {
    const mealPlans = await Mealplan.findAll();
    res.status(200).json(mealPlans);
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
});

// Post Info
router.post('/', async (req, res) => {
  try {
    const newMPdata = await Mealplan.create({
      userid: req.body.userid,
      breakfast: req.body.breakfast,
      lunch: req.body.lunch,
      dinner: req.body.dinner,
      dayid: req.body.dayid,
    });
    res.status(200).json(newMPdata);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});


module.exports = router;