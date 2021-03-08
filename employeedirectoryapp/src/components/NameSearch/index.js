import React from "react";
import "./index.css";

function NameSearch(props) {
  return (
    <div className="container-fluid">
      <form className="d-flex" />
      <input
        onChange={props.handleInputChange}
        className="form-control me-2"
        name="search"
        type="text"
        placeholder="Quick Search by Name"
      />
    </div>
  );
}
export default NameSearch;
