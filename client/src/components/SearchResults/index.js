import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";

import "./style.css";

function SearchResults(props) {

  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="title-font">
            {props.title}
          </h3>
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-secondary" href={props.link} target="_blank">
              View
            </a>
            {props.canSave  ? 
            (<button className="btn btn-secondary" data-index={props.booksIndex} onClick={props.handleSaveBook} >Save</button>) : 
            (<button className="btn btn-secondary" id={props.idInDatabase} data-index={props.savedIndex} onClick={props.handleDeleteBook} >Delete</button>)}
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">
            Author(s): {props.authors}
          </p>
        </Col>
        <Col size="md-6">
          <p className="font-italic small">
            Published Date: {props.publishedDate}
          </p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={props.image} alt={props.title} />
        </Col>
        <Col size="12 sm-8 md-10">
          <p>{props.description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default SearchResults;
