import React from "react";

function BookDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>authors: {props.authors}</h3>
      <h3>publishedDate: {props.publishedDate}</h3>
      <h3>description: {props.description}</h3>
    </div>
  );
}

export default BookDetail;
