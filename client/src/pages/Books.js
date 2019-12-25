import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import BookDetail from "../components/BookDetail";
import API from "../utils/API";

class Books extends Component {
  state = {
    // How to retrieve data from google api ?
    title: "",
    authors: [],
    publishedDate: "",
    description: "",
    image: "",
  };

  componentDidMount() {
    this.searchBooks();
    this.loadBooks();
  };

  searchBooks = search => {
    API.search(search)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ 
          title: res.data.items[0].volumeInfo.title, 
          authors: res.data.items[0].volumeInfo.authors, 
          publishedDate: res.data.items[0].volumeInfo.publishedDate, 
          description: res.data.items[0].volumeInfo.description, 
          image: res.data.items[0].volumeInfo.imageLinks.thumbnail, 
        })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // const value = event.target.value;
    // const name = event.target.name;
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.title || "Search for a Book to Begin"}
            >
              {/* Question mark "?" meaning here?  */}
              {this.state.title ? (
                <BookDetail
                  title={this.state.title}
                  src={this.state.thumbnail}
                  authors={this.state.authors}
                  publishedDate={this.state.publishedDate}
                  description={this.state.result.description}
                />
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Books;
