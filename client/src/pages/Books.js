import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

import API from "../utils/API";

class Books extends Component {
  state = {
    input: "",
    books: [],
    error: "",
  };

  // When the component mounts, get the auto-fill books name list suggestions 
  componentDidMount() {

  };

  handleInputChange = event => {
    const value = event.target.value;
    // const { value } = event.target;
    console.log(event.target.value);
    this.setState({
      input: value
    });
  };
  // handleInputChange = event => {
  //   this.setState({ input: event.target.value });
  // };

  handleInputSubmit = event => {
    event.preventDefault();
    API.searchBook(this.state.input)
      .then(res => this.setState({
        // title: res.data.items[0].volumeInfo.title, 
        // authors: res.data.items[0].volumeInfo.authors, 
        // publishedDate: res.data.items[0].volumeInfo.publishedDate, 
        // description: res.data.items[0].volumeInfo.description, 
        // image: res.data.items[0].volumeInfo.imageLinks.thumbnail,  
        // link: res.data.items[0].volumeInfo.previewLink,
        books: res.data.items,
      })
      )
      .catch(err => console.log(err));
  };

  handleSaveBook = event => {
    event.preventDefault();
    // Question? But we didn't set id here?
    console.log(event.target)
    const index = event.target.getAttribute("data-index")
    const book = this.state.books[index];

    const bookInfo = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      publishedDate: book.volumeInfo.publishedDate,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.previewLink,
    };
    console.log(book)
    API.saveBook(bookInfo)
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1 className="text-center">Search Book!</h1>
              </Jumbotron>
              <Navbar />
              <SearchForm
                handleInputChange={this.handleInputChange}
                handleInputSubmit={this.handleInputSubmit}
              />
              {/* Question? map and return */}
              {this.state.books.map((obj, index) => {
                return <SearchResults
                  cansave={true}
                  title={obj.volumeInfo.title}
                  authors={obj.volumeInfo.authors}
                  image={obj.volumeInfo.imageLinks.thumbnail}
                  publishedDate={obj.volumeInfo.publishedDate}
                  link={obj.volumeInfo.previewLink}
                  description={obj.volumeInfo.description}
                  // Question? Why there is no this for index?
                  index={index}
                  // Question?
                  handleSaveBook={this.handleSaveBook}
                />

              })}

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default Books;
