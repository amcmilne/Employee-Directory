import React from "react";
import NameSearch from "../NameSearch/index.js";
import "./index.css";

function Header(props) {
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <h1>
          <strong>Employee Directory</strong>
        </h1>
        <h3>
          <strong>Find contacts within your organization</strong>
        </h3>

        <div className="row">
          <form className="form-inline" />
            <NameSearch handleInputChange={props.handleInputChange} />
        </div>
      </div>
    </div>
  );
}

export default Header;
