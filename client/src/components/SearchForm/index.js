import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.books array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="book">Book Name:</label>
        <input
          type="text"
          value={props.input}
          onChange={props.handleInputChange}
          className="form-control"
          placeholder="Type in a book to begin"
          id="book"
        />
        {/* Set the autofill suggestions */}
        {/* <datalist id="books">
          {props.books.map(book => (
            <option value={book} key={book} />
          ))}
        </datalist> */}
        <button
          type="submit"
          onClick={props.handleInputSubmit}
          className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
