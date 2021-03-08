import React from "react";
import NameSearch from "../NameSearch/index.js";
import DOBSearch from "../DOBSearch/index.js";
import "./index.css";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div className="row">
          <NameSearch />
          <DOBSearch />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
