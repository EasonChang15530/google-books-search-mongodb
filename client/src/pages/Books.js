import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

import API from "../utils/API";

class Books extends Component {
  state = {
    // How to retrieve data from google api ?
    search: "",
    books: [],
    error: "",
  };

  componentDidMount() {
    API.getBaseBreedsList()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  };

  searchBooks = search => {
    API.searchBooks(this.state.search)
      .then(res => this.setState({ 
        // title: res.data.items[0].volumeInfo.title, 
        // authors: res.data.items[0].volumeInfo.authors, 
        // publishedDate: res.data.items[0].volumeInfo.publishedDate, 
        // description: res.data.items[0].volumeInfo.description, 
        // image: res.data.items[0].volumeInfo.imageLinks.thumbnail,  
        books: res.data,
        })
      )
      .catch(err => console.log(err));
  };

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };
  // // handleInputChange = event => {
  // //   // const value = event.target.value;
  // //   // const search = event.target.search;
  // //   const { search, value } = event.target;
  // //   this.setState({
  // //     [search]: value
  // //   });
  // // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.searchBook(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ 
  //         results: res.data.items[0].volumeInfo.imageLinks.thumbnail,
  //         error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };

//   // loadBooks = () => {
//   //   API.getBooks()
//   //     .then(res =>
//   //       this.setState({ 
          
//   //       })
//   //     )
//   //     .catch(err => console.log(err));
//   // };

//   // deleteBook = id => {
//   //   API.deleteBook(id)
//   //     .then(res => this.loadBooks())
//   //     .catch(err => console.log(err));
//   // };

  render() {
    return (
      <div>
        <Container fluid>
        <Row>
          <Col size="md-12">
          <Jumbotron>
          <h1 className="text-center">Search Book!</h1>
          </Jumbotron>
          <SearchForm
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            books={this.state.books}
          />
          <SearchResults 
          // results={this.state.results} 
          />
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}


export default Books;
