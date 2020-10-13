const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const { signup, signin, signout } = require('../../controller/admin/auth');
const { validateSignUpRequest, isRequestValidated, validateSignInRequest } = require('../../validators/auth');
const { requireSingin } = require('../../common-middleware');

router.post('/admin/signin', validateSignInRequest, isRequestValidated, signin)

router.post('/admin/signup', validateSignUpRequest, isRequestValidated, signup)

router.post('/admin/signout', signout)


module.exports =  router;