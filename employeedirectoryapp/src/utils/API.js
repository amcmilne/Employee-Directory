/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

// export an object containing methods to access the Random User API

export default {
    search: function() { 
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};