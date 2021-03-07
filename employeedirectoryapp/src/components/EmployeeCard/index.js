import React from "react";
import EmployeeData from "../EmployeeData/index.js";
import DOBSearch from "../DOBSearch/index.js";
import NameSearch from "../NameSearch/index.js";
import Wrapper from "../Wrapper/index.js";
import Header from "../Header/index.js";
import API from "../../utils/API.js";
import "./index.css";

class EmployeeCard extends React.Component {
  state = {
    result: [],
    filter: "",
    filterby: "lastName" || "dob",
    sort: "default",
  };

  componentDidMount() {
      this.searchAPI();
  }  
      
  searchAPI = query => {
        API.search(query)
        .then(res => {this.setState({result: res.data.results.map((e, index) => (
            {
                firstName: e.name.first,
                lastName: e.name.last,
                image: e.image,
                email: e.email,
                phone: e.phone,
                dob: e.dob,
                key: index,
            }
            ))
            //.catch(err => console.log(err)),
        },
    )}
  )}

  filterEmployees = (searchkey) => {
        console.log(searchkey);
        console.log(this.state.result);
        let filterResult = this.state.result.filter(
        (employee) => employee.firstName === searchkey
        );

        this.setState({
        result: filterResult,
    });
  };

  handleFormSubmit = (e) => {
        e.preventDefault();
        this.searchAPI(this.state.results)
        let value = e.target.value;
        let name = e.target.name;
   

        this.filterEmployees(value);
        this.setState({
        [name]: value,
    });
    this.filterEmployees(value);
    this.filterEmployees(this.state.search);
  };

  handleInputChange = e => {
      let value  = e.target.value; 
      let name = e.target.name; 

      this.setState({
          [name]: value
      });
  };

  render() {
      return (
          <Wrapper>
          <Header />
          <DOBSearch />
          <NameSearch />
          <EmployeeData />
          </Wrapper>        
      );
  }
};

export default EmployeeCard;
