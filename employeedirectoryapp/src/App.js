import React from "react";
import EmployeeCard from "./components/EmployeeCard/index.js";
import Header from "./components/Header/index.js";
import Wrapper from "./components/Wrapper/index.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <EmployeeCard />
      </Wrapper>
    </div>
  );
}

export default App;
