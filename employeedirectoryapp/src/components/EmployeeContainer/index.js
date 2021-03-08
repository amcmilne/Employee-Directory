import React from "react";
import Wrapper from "../Wrapper/index.js";
import Nav from "../Nav/index.js";
import Header from "../Header/index.js";
//import EmployeeCard from "../EmployeeCard/index.js";
import EmployeeResults from "../EmployeeResults/index.js";

import API from "../../utils/API.js";

class EmployeeContainer extends React.Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    order: "",
  };

  //initial API call on page load
  componentDidMount() {
    API.search()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  //API call for secondary searches
  employeeSearch = () => {
    API.search()
      .then((res) =>
        this.setState({
          filteredEmployees: res.data.results,
          employees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  //sort in ascending or descending order
  sortByName = () => {
    const filtered = this.state.filteredEmployees;
    if (this.state.order === "asc") {
      const sorted = filtered.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      console.log(sorted);

      this.setState({
        filteredEmployees: sorted,
        order: "desc",
      });
    } else {
      const sorted = filtered.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      console.log(sorted);

      this.setState({
        filteredEmployees: sorted,
        order: "asc",
      });
    }
  };

  //handle search
  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.search) {
      alert("First Name, Last Name");
    }
    const { employees, search } = this.state;
    const filteredEmployees = employees.filter((employee) =>
      employee.name.first.toLowerCase().includes(search.toLowerCase())
    );

    this.setState({
      filteredEmployees,
    });
  };

  //handle dynamic loading
  handleInputChange = (e) => {
    const userInput = e.target.value;
    const employees = this.state.employees;
    const filteredEmployees = employees.filter(
      (employee) =>
        employee.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      filteredEmployees,
    });
  };

  render() {
    return (
      <div>
        <Wrapper>
          <Header />
          <Nav
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
          <EmployeeResults
            employee={this.state.employees}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            results={this.state.filteredEmployees}
            sortByName={this.sortByName}
          />
        </Wrapper>
      </div>
    );
  }
}

export default EmployeeContainer;
