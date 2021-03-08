import React from "react";
import Moment from "react-moment";
//import EmployeeCard from "../EmployeeCard/index.js";

function EmployeeResults(props) {
  return (
    <table className="employeeResults">
      <th />
      <tr />
      <th></th>
      <th onClick={props.sortByName}>Employee Name</th>
      <th>Phone(cell)</th>
      <th>E-mail Address</th>
      <th>DOB</th>

      <tb className="" />
      {props.results &&
        props.results.map((result) => (
          <tr className="results" key={result.login.uuid}>
            <td>
              {" "}
              <img
                className="
                    "
                src={result.picture.large}
                alt="employee"
              />
            </td>
            <td className="name">
              {result.name.first + " " + result.name.last}{" "}
            </td>
            <td className="phone">{result.cell}</td>
            <td className="email">
              <a href={result.email}>{result.email}</a>
            </td>
            <td className="DOB">
              <Moment format="MM/DD/YYYY">{result.dob.date}</Moment>
            </td>
          </tr>
        ))}
    </table>
  );
}

export default EmployeeResults;

// function EmployeeResults(props) {
//   const employeeList= (
//       props.data && props.data.map(() => (
//     <EmployeeCard
//       image={props.image}
//       firstName={props.firstName}
//       lastName={props.lastName}
//       email={props.email}
//       phone={props.phone}
//       dob={props.dob}
//     />
//     ))
//   )
//   return employeeList || null;
// }

// export default EmployeeResults;
