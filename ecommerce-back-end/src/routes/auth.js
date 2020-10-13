const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { signup, signin } = require('../controller/auth');
const { validateSignUpRequest, isRequestValidated, validateSignInRequest } = require('../validators/auth');

router.post('/signin', validateSignInRequest, isRequestValidated, signin)

router.post('/signup', validateSignUpRequest, isRequestValidated, signup)

// router.post('/profile', requireSingin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// })

module.exports =  router;