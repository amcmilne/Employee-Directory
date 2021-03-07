import React from "react";
import "./index.css";
import CardDataContext from "./utils/CardDataContext";

const DOBSearch = () => {
    const context = React.useContext(CardDataContext);
    return (
        <div>
            <form className="d-flex">
            <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search by DOB" 
                aria-label="Search">
                onChange={e => context.handleSearchChange(e)}/
            </input>        
            <button 
                class="btn btn-outline-success" 
                type="submit">Search
            </button>
            </form>
        </div>
    )
}
export default DOBSearch; 

