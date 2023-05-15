const express = require('express');
const userController = require('../controllers/user.controller');
const { 
    displayNameValidator,
    emailValidator,
    passwordValidator, 
    } = require('../middleware/userValidatior');
const { validateJwt } = require('../middleware/tokenValidator');

const router = express.Router();

router.post(
'/user', 
emailValidator,
displayNameValidator,
passwordValidator,
 userController.createUser,
 );

router.get('/user', validateJwt, userController.getUser);
router.get('/user/:id', validateJwt, userController.getUserById);

module.exports = router;