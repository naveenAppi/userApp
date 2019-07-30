import axios from 'axios';
import { PROFILE_LOADING, GET_PROFILE,GET_PROFILES, CLEAR_CURRENT_PROFILE , GET_ERRORS, SET_CURRENT_USER } from './Types';


//get current user profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get('/api/profile')
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_PROFILE,
            payload:{}
        }))
    
}
//create Profile
export const createNewProfile = (profileData, history) => dispatch => {
    axios.post('/api/profile', profileData)
        .then(res => history.push('/dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload:err.response.data
    }))
}
export const addExperince = (userData , history) =>dispatch=> {
    axios.post('/api/profile/experience', userData)
        .then(res => history.push('/dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload:err.response.data
    }))
}
export const addEducation = (userData , history) =>dispatch=> {
    axios.post('/api/profile/education', userData)
        .then(res => history.push('/dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload:err.response.data
    }))
}

export const deleteProfileAccount = () => dispatch => {
    if (window.confirm('Are you Sure?this cant undo')) {
        axios.delete('/api/profile')
            .then(res => dispatch({
                type: SET_CURRENT_USER,
                payload:{}
            })).catch(err => dispatch({
                type: GET_ERRORS,
                payload:err.response.data
        }))
    }
}
//delete experience
export const deleteExperience = (id) => dispatch => {
    axios.delete(`/api/profile/experience/${id}`)
        .then(res => dispatch({
            type: GET_PROFILE,
            payload:res.data
    })).catch(err => dispatch({
        type: GET_ERRORS,
        payload:err.response.data
}))
}

//delete experience
export const deleteEducation = (id) => dispatch => {
    axios.delete(`/api/profile/education/${id}`)
        .then(res => dispatch({
            type: GET_PROFILE,
            payload:res.data
    })).catch(err => dispatch({
        type: GET_ERRORS,
        payload:err.response.data
}))
}
// get all profiles
export const getProfiles = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get('/api/profile/all')
        .then(res => dispatch({
            type: GET_PROFILES,
            payload: res.data
        })).catch(err => dispatch({
            type: GET_PROFILES,
            payload:{}
        }))
    
}
// Get profile by handle
export const getProfileByHandle = handle => dispatch => {
    dispatch(setProfileLoading());
    axios
      .get(`/api/profile/handle/${handle}`)
      .then(res =>
        dispatch({
          type: GET_PROFILE,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_PROFILE,
          payload: null
        })
      );
  }

//setProfile loading 
export const setProfileLoading = () => {
    return {
        type:PROFILE_LOADING
    }
}
//clear current Profile 
export const clearCurrentProfile = () => {
    return {
        type:CLEAR_CURRENT_PROFILE
    }
}
