import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";

function NoMatch() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">Search Book!</h1>
            </Jumbotron>
            <Navbar />
            <h1>404 Page Not Found<span role="img" aria-label="Face With Rolling Eyes Emoji"> 🙄
              </span>
            </h1>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NoMatch;
