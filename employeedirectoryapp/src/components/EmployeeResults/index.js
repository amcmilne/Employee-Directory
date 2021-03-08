import React from "react";
import Moment from "react-moment";
//import EmployeeCard from "../EmployeeCard/index.js";


function EmployeeResults(props) {
  return (
    <table className="employeeResults">
        <thead>
            <tr>
                <th></th>
                <th onClick={props.sortByName}>Name</th>
                <th>Phone</th>
                <th>E-mail</th>
                <th>DOB</th>
            </tr>
        </thead>

        <tbody className= "">
            {props.results && props.results.map(result => (
                <tr className="results" key={result.login.uuid}>
                 

                    <td> <img className="
                    "src={result.picture.medium} alt="employee" /></td>
                    
                    <td>{result.name.first + " " + result.name.last}  </td>

                    <td>{result.cell}</td>
                    <td className="email"><a href={result.email}>{result.email}</a></td>
                    <td><Moment format="MM/DD/YYYY">{result.dob.date}</Moment></td>

                </tr>
            ))}
        </tbody>
    </table >
)

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
