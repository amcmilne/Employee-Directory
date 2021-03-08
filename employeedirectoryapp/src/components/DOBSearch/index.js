import React from "react";
import "./index.css";

const DOBSearch = (props) => {
       return (
        <div>
            <form className="d-flex" />
            <input  
                onChange={props.handleInputChange}
                value={props.value}
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
                className="btn btn-success"> Submit               
             </button>              
           
        </div>
    )
}
export default DOBSearch; 

