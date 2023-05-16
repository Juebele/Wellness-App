const router = require('express').Router();
const { Mealplan } = require('../../models')

// Get all mealplan info
router.get('/', async (req, res) => {
  try {
    const mpUserData = await Mealplan.findAll({});
    res.status(200).json(mpUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// localhost:3001/
// new post
router.post('/', async (req, res) => {
  try {
    const newMPdata = await Mealplan.create({
      userid: req.body.userid,
      breakfast: req.body.breakfast,
      lunch: req.body.lunch,
      dinner: req.body.dinner,
      dayid: req.body.dayid,
    });
    console.log(newMPdata)
    res.status(200).json(newMPdata);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});


module.exports = router;