import React from "react";
import NameSearch from "../NameSearch/index.js";
import "./index.css";

function Nav(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="row">
        <div className="column 6">
          <NameSearch handleInputChange={props.handleInputChange} />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
