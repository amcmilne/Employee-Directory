import React from "react";
import "./index.css";

const DOBSearch = (props) => {
       return (
        <div className= "container-fluid">
            <form className="d-flex" />
            <input  
                onChange={props.handleInputChange}
                value={props.value}
                id="employees"
                list="dob"
                className="form-control me-2" 
                name= "search"
                type="text" 
                placeholder="Search by DOB" 
                aria-label="Search"
                />             
              
                 
            <button 
                onClick={props.handleFormSubmit} 
                value=""   
                type="submit"
                className="btn btn-success"> Search             
             </button>              
           
        </div>
    )
}
export default DOBSearch; 

