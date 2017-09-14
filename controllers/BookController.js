var BookModel = require('../models/BookModel.js');
var UserModel = require('../models/UserModel.js');

/**
 * BookController.js
 *
 * @description :: Server-side logic for managing Books.
 */
module.exports = {
    /**
     * UserController.list()
     */
    list: function (req, res) {
        BookModel.find(function (err, Books) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Book.',
                    error: err
                });
            }
            return res.render('books/all', {user: req.user, books: Books});
        });
    },
    myBooksController: function(req, res) {
      BookModel.find({owner: req.user, requesters: {$not: {$size: 0}}},function (err, Books) {
          if (err) {
              return res.status(500).json({
                  message: 'Error when getting Book.',
                  error: err
              });
          }
          console.log(Books);
          return res.render('books/my-books', {user: req.user, books: Books});
      });
    },
    addNewBook: function(req, res) {
      var Book = new BookModel();
      Book.title = req.body.title;
      Book.imgUrl = req.body.image;
      Book.owner = req.user;

      Book.save(function(err, book){
        if (err) {
          return res.status(500).json({
              message: 'Error when creating Book.',
              error: err
          });
        }
        return res.redirect('/books/');
      })

    },
    show: function (req, res) {
        BookModel.find(function (err, Book) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Book.',
                    error: err
                });
            }
            return res.json(Book);
        });
    },
};
