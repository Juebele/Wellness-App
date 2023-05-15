const router = require('express').Router();

const userRoutes = require('../home-routes');

router.use('/users', userRoutes);

module.exports = router;