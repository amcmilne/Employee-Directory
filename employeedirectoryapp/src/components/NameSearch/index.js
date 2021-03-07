import React from "react";
import "./index.css";


const NameSearch = (props) => {    
    return (
        <div>
            <form className="d-flex" />
            <input
                 onChange={props.handleInputChange}
                 value={props.search}
                 className="form-control me-2" 
                 name= "search"
                 type="text" 
                 placeholder="Search by Name" 
                 aria-label="Search"
             />
            
                 
            <button
             onClick={props.handleSubmitForm}
             className="btn btn-outline-success" 
             type="submit" Search 
             />
               
           
        </div>
    )
}
export default NameSearch; 