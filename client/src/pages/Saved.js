import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

class Saved extends Component {
  state = {
    books: [],
    error: "",
  };

  componentDidMount() {
    API.getSavedBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  // This method does not delete the corresponding book information from mongo database
  // handleDeleteBook = event => {
  //   event.preventDefault();
  //   const index = event.target.getAttribute("data-index")
  //   console.log(index)

  //   // The splice() method adds/removes items to/from an array, and returns the removed item(s).
  //   // Note: This method changes the original array.
  //   this.state.books.splice(index, 1)

  //   this.setState({ books: this.state.books });

  // }

  // Offer a second method to delete books, using utils API.js
  handleDeleteBook = event => {
    event.preventDefault();
    const id = event.target.id;
    console.log(id)
    API.deleteBook(id)
      .then(res => this.componentDidMount())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1 className="text-center">Saved book</h1>
              </Jumbotron>
              <Navbar />
              {this.state.books.map((obj, index) => {
                return <SearchResults
                  canSave={false}
                  title={obj.title}
                  authors={obj.authors}
                  image={obj.image}
                  publishedDate={obj.publishedDate}
                  link={obj.link}
                  description={obj.description}

                  idInDatabase={obj._id}
                  savedIndex={index}
                  handleDeleteBook={this.handleDeleteBook}
                />

              })}

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Saved;
