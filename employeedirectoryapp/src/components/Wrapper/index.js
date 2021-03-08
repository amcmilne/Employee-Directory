import React from 'react';
import "./index.css";

function Wrapper(props) {
  return (
      <div className="container-fluid">
        { props.children }
      </div>
  );
}

export default Wrapper;