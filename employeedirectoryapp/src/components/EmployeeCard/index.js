import React from "react";


function EmployeeCard(props) {
    return(
        <div>
            <img 
                src={props.image}
                alt="employee"
             />

            <h2>{props.firstName}</h2>

            <h2>{props.lastName}</h2>

            <h3>{props.email}</h3>

            <h3>{props.phone}</h3>

            <h3>{props.dob}</h3>
        </div>
    );
}

export default EmployeeCard;