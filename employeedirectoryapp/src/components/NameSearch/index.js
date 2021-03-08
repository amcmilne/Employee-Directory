import React from "react";
import "./index.css";


const NameSearch = (props) => {    
    return (
        <div>
            <form className="d-flex" />
            <input
                 onChange={props.handleInputChange}
                 value={props.value}
                 className="form-control me-2" 
                 name= "search"
                 type="text" 
                 placeholder="Search by Name" 
                 aria-label="Search"
             />
            
                 
            <button
             onClick={props.handleSubmitForm}
             className="btn btn-success" 
             value=""
             type="submit"> Search 
            </button>
               
           
        </div>
    )
}
export default NameSearch; 