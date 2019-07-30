import axios from 'axios';


 const setAuthToken = token => {
    if (token) {
        //if token is comes?set to auth header
        axios.defaults.headers.common['Authorization'] = token
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;