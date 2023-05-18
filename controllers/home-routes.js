const router = require('express').Router();
const {User, Mealplan} = require('../models');

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


router.get ('/login', (req, res) => {

  console.log("in the route");
  res.render('login');

})
//localhost:3001/signup
//request to create new user and put into db when user clicks sign up
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

router.get ('/signup', (req, res) => {

  console.log("in the route");
  res.render('signup');

})

// localhost:3001/api/mealplan
// Get Info
router.get('/', async (req, res) => {
    try {
      const mpUserData = await Mealplan.findAll({});
      const mpMappedData = mpUserData.map((mealplan) => mealplan.get({plain: true}))
      console.log(mpMappedData);
      // res.status(200).json(mpUserData);
      res.render('homepage');
      //console.log(mpMappedData);
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // localhost:3001/api/mealplan
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
      //console.log(newMPdata)
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