import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS , SET_CURRENT_USER } from './Types';
import { toast } from 'react-toastify';
import setAuthToken from '../Utils/setAuthToken';

//register user
export const registerUser = (userData , history) =>dispatch=> {
    axios.post('/api/user/register', userData)
        .then(res => {
            history.push('/login') 
            if (res) {
       return  toast.success("successfully registered please login Here", {
        position: toast.POSITION.TOP_RIGHT
      })
            }
        }          
).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
}

//login - GET user token
export const loginUser = userData => dispatch => {
    axios.post('/api/user/login', userData)
        .then(res => {
            const { token } = res.data;
            //save in local storage
            localStorage.setItem('jwt_token', token);
            //set in to an auth header
            setAuthToken(token);
            //decode token 
            const decoded = jwt_decode(token);
            //set current user using this decode values
            dispatch(setCurrentUser(decoded));
        }).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
}

//set loggedin user 
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload:decoded
    }
}

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwt_token');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
  };