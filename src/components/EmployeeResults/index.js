import React from "react";
import Moment from "react-moment";
import "./index.css";

function EmployeeResults(props) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <table className="employeeResults">
            <thead />
            <tr />

            <th scope="col"></th>
            <th scope="col">Employee</th>
            <th scope="col">DOB</th>
            <th scope="col">Phone</th>
            <th scope="col">Cell</th>
            <th scope="col">E-mail Address</th>
            <th scope="col" onClick={props.sortByName}>FILTER (A-Z or Z-A)</th>

            <tbody className="id" />
            {props.results &&
              props.results.map((result) => (
                <tr className="results" key={result.login.uuid}>
                  <td>
                    <img
                      className="image"
                      src={result.picture.large}
                      alt="employeeheadshot"
                    />
                  </td>

                  <td className="name">
                    {result.name.first + " " + result.name.last}
                  </td>

                  <td className="DOB">
                    <Moment format="MM/DD/YYYY">{result.dob.date}</Moment>
                  </td>

                  <td className="phone">{result.phone}</td>

                  <td className="cell">{result.cell}</td>

                  <td className="email">
                    <a href={result.email}>{result.email}</a>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeResults;
