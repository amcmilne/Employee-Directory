import React from "react";
//import NameSearch from "../NameSearch/index.js";
//import DOBSearch from "../DOBSearch/index.js";
import "./index.css";

function Nav(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="row">
        <div className="column 6">
          <form className="d-flex" />
          <input
            onChange={props.handleInputChange}
            value={props.value}
            id="employees"
            list="employee"
            className="form-control me-2"
            name="search"
            type="text"
            placeholder="Search by Name"
          />

          <button
            className="btn btn-success"
            value=""
            type="submit"
            onClick={props.handleSubmitForm}
          >
            {" "}
            Search
          </button>
        </div>
      </div>
      <div className="column 6">
        <form className="d-flex" />
        <input
          onChange={props.handleInputChange}
          value={props.value}
          id="employees"
          list=""
          className="form-control me-2"
          name="search"
          type="text"
          placeholder="Search by DOB"
          aria-label="Search"
        />

        <button
          onClick={props.handleFormSubmit}
          value=""
          type="submit"
          className="btn btn-success"
        >
          {" "}
          Search
        </button>
      </div>
    </nav>
  );
}

export default Nav;
