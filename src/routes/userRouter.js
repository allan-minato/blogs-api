const express = require('express');
const userController = require('../controllers/user.controller');
const { 
    displayNameValidator,
    emailValidator,
    passwordValidator, 
    } = require('../middleware/userValidatior');

const router = express.Router();

router.post(
'/user', 
emailValidator,
displayNameValidator,
passwordValidator,
 userController.createUser,
 );

module.exports = router;