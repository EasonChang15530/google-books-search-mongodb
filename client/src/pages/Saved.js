import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

class Saved extends Component {
  state = {
    search: "",
    books: [],
    error: "",
  };

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // componentDidMount() {
  //   API.getBook(this.props.match.params.id)
  //     .then(res => this.setState({ book: res.data }))
  //     .catch(err => console.log(err));
  // }

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

export default Saved;
