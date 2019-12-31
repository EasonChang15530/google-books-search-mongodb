import axios from "axios";
const googlebooksURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "&apikey=trilogy";

export default {

  // Retrieve data from Google Book Api
  // Searches books from Google Book Api
  searchBook: function(search) {
    return axios.get(googlebooksURL + search);
  },

  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },

  // Searches the saved book with the given id
  searchSavedBook: function(id) {
    return axios.get("/api/books/" + id);
  },

  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

  // Set the auto-fill suggestions
  getAutoFillList: function() {
    // This function is not implemented for the moment, because the auto-fill books name list API cannot be found
    return axios.get("https://www.googleapis.com/books/v1/list");
  },

};
