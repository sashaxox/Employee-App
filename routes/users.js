var express = require('express');
const { login, register, current } = require('../controllers/users');
var router = express.Router();

router.post('/login', login);

router.post('/register', register);

router.get('/current', current);

module.exports = router;
