import React from "react";
import "./index.css";


const NameSearch = (props) => {    
    return (
        <div className= "container-fluid">
            <form className="d-flex" />
            <input
                 onChange={props.handleInputChange}
                 value={props.value}
                 id="employees"
                 list="employee"
                 className="form-control me-2" 
                 name= "search"
                 type="text" 
                 placeholder="Search by Name" 
             />
            
                 
            <button
             className="btn btn-success" 
             value=""
             type="submit"
             onClick={props.handleSubmitForm}> Search 
            </button>
               
           
        </div>
    )
}
export default NameSearch; 