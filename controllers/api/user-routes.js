const router = require('express').Router();
const { User } = require('../../models');

//localhost:3001/signup
//create new user
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
    //     
      // Set up sessions with a 'loggedIn' variable set to `true`
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});
  

//localhost:3001/login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
            // where: {
            //     email: req.body.email,
            // },
        });
        if(!dbUserData) {
            res
            .status(400)
            .json({message: 'Incorrect email or password'});
            return
        }
    //     res.json(dbUserData);
    // } catch (err) {
    //     console.log(err);
    //     res.status(500).json(err);

    // }
    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



module.exports = router;