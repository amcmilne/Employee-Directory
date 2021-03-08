import React from "react";
import Moment from "react-moment";

function EmployeeResults(props) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <table className="employeeResults">
            <th />
            <tr />
            <th></th>

            <th>Employee</th>
            <th>DOB</th>
            <th>Phone</th>
            <th>Cell</th>
            <th>E-mail Address</th>
            <th onClick={props.sortByName}>FILTER (A-Z or Z-A)</th>

            <tb className="id" />
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
