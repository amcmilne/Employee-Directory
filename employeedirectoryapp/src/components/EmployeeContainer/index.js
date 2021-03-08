import React from "react";
import Wrapper from "../Wrapper/index.js";
import Nav from "../Nav/index.js";
import Header from "../Header/index.js";
import EmployeeResults from "../EmployeeResults/index.js";
import 'bootstrap/dist/css/bootstrap.min.css';

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

  //sort in ascending or descending order
  sortByName = () => {
    const filtered = this.state.filteredEmployees;
    if (this.state.order === "asc") {
      const sorted = filtered.sort((a, b) =>
        a.name.last > b.name.last ? 1 : -1
      );
      console.log(sorted);

      this.setState({
        filteredEmployees: sorted,
        order: "desc",
      });
    } else {
      const sorted = filtered.sort((a, b) =>
        a.name.last > b.name.last ? -1 : 1
      );
      console.log(sorted);

      this.setState({
        filteredEmployees: sorted,
        order: "asc",
      });
    }
  };

  //handle dynamic loading
  handleInputChange = (e) => {
    const employees = this.state.employees;
    const UserInput = e.target.value;
    const filteredEmployees = employees.filter(
      (employee) =>
        employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
    );
    this.setState({
      filteredEmployees,
    });
  };
  
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

  render() {
    return (
      <div>
        <Wrapper>
          <Header />
          <Nav
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            employees={this.state.employees}
            results={this.state.filteredEmployees}
          />
          <EmployeeResults
            results={this.state.filteredEmployees}
            sortByName={this.sortByName}
          />
        </Wrapper>
      </div>
    );
  }
}

export default EmployeeContainer;
