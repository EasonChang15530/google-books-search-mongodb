import React from "react";

// Exporting the Container, Row, and Col components from this file

export function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return (
    <div className={size}>
      {props.children}
    </div>
  );
};

export function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
};

export function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
};

