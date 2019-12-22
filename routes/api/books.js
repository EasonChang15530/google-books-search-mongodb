const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const axios = require("axios");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

router.route("/search/:searchBook")
  .get(function (req,res) {
    var search = req.params.searchBook;
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search)
      .then(function (response) {
      console.log(response.data)
      res.json(response.data)
    })
  })


module.exports = router;

// GET https://www.googleapis.com/books/v1/volumes?q=search+terms&key=yourAPIKey
// APIKey=AIzaSyCzILzMGHZzUEErZgl7ZBjUxEkgknE5D_o