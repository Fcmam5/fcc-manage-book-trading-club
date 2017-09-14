var express = require('express');
var router = express.Router();
// var UserController = require('../controllers/UserController.js');
var BookController = require('../controllers/BookController.js');
var helper = require('./helperFunctions');

/*
* Get USER profile
*/
router.get('/',BookController.list);


router.get('/my-books',BookController.myBooksController);
router.post('/my-books',BookController.addNewBook);

// router.get('/profile/:id', helper.isLoggedIn,UserController.showProfile);

module.exports = router;
