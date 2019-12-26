import axios from "axios";
const googlebooksURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "&apikey=trilogy";

export default {

  // Searches a book from Google Book Api
  searchBook: function(book) {
    return axios.get(googlebooksURL + book);
  },

  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  // Gets all saved books
  getBooks: function() {
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

  
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  },

};
