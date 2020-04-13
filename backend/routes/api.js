const router = require('express').Router();

//
const apiUserRouter = require('./api/users');


// http://localhost:3000/api/users/
router.use('/users', apiUserRouter);


module.exports = router;