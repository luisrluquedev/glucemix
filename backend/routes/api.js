const router = require('express').Router();

const apiUserRouter = require('./api/users');

module.exports = router;

// http://localhost:3000/api/users/
router.use('/users', apiUserRouter);