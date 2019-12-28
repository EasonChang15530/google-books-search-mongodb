import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

import API from "../utils/API";

class Books extends Component {
  state = {
    search: "",
    books: [],
    error: "",
  };

  // When the component mounts, get the auto-fill books name list suggestions 
  componentDidMount() {
    
  };

  // searchOneBook = () => {
  //   API.searchBooks(this.state.search)
  //     .then(res => this.setState({ 
  //       // title: res.data.items[0].volumeInfo.title, 
  //       // authors: res.data.items[0].volumeInfo.authors, 
  //       // publishedDate: res.data.items[0].volumeInfo.publishedDate, 
  //       // description: res.data.items[0].volumeInfo.description, 
  //       // image: res.data.items[0].volumeInfo.imageLinks.thumbnail, 
  //       // link: res.data.items[0].volumeInfo.previewLink,
  //       books: res.data.items,
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  // handleInputChange = event => {
  //   // const value = event.target.value;
  //   // const search = event.target.search;
  //   const { search, value } = event.target;
  //   this.setState({
  //     [search]: value
  //   });
  // };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBook(this.state.search)
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
          />
          {this.state.books.map(obj=>{
            return <SearchResults 
            title={obj.volumeInfo.title}
            authors={obj.volumeInfo.authors}
            image={obj.volumeInfo.imageLinks.thumbnail}
            publishedDate={obj.volumeInfo.publishedDate}
            link={obj.volumeInfo.previewLink}
            description={obj.volumeInfo.description}
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
