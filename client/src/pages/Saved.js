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

  componentDidMount() {
    API.getSavedBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

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
            cansave={false}
            title={obj.title}
            authors={obj.authors}
            image={obj.image}
            publishedDate={obj.publishedDate}
            link={obj.link}
            description={obj.description}
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
