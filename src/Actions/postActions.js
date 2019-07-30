import axios from 'axios';
import {CLEAR_ERROR, ADD_POST, GET_ERRORS, GET_POSTS, GET_POST, POST_LOADING , DELETE_POST } from './Types';


// add post 
export const addPost = (postData) => dispatch => {
  dispatch(clearError());
    axios.post('/api/post/', postData)
        .then(res => dispatch({
            type: ADD_POST,
            payload:res.data
        })
).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
}
// get post 
// Get Posts
export const getPost = () => dispatch => {
    dispatch(setPostLoading());
    axios
      .get('/api/post')
      .then(res =>
        dispatch({
          type: GET_POSTS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_POSTS,
          payload: null
        })
      );
};

// Get individual Posts
export const getIndividualPost = (id) => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/post/${id}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null
      })
    );
};
  
//delete post 
export const deletePost = id => dispatch => {
  axios.delete(`/api/post/${id}`)
    .then(res => dispatch({
      type: DELETE_POST,
      payload:id
  })).catch(err =>
    dispatch({
      type: GET_POSTS,
      payload: null
    })
  );
}
//add likes
export const addLikes = id => dispatch => {
  axios.post(`/api/post/like/${id}`)
    .then(res => dispatch(getPost()))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload:err.response.data
  }))
}
//add likes
export const removeLikes = id => dispatch => {
  axios.post(`/api/post/unlike/${id}`)
    .then(res => dispatch(getPost()))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload:err.response.data
  }))
}

// Add Comment
export const addComment = (postId, commentData) => dispatch => {
  dispatch(clearError());
  axios
    .post(`/api/post/comment/${postId}`, commentData)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// delete comment 
export const deleteComment = (postId, commentId) =>dispatch=> {
  axios.delete(`/api/post/${postId}/${commentId}`)
      .then(res => dispatch({
          type: GET_POST,
          payload:res.data
      })
).catch(err => dispatch({
          type: GET_ERRORS,
          payload: err.response.data
      }));
}



//get post loading
export const setPostLoading = () => {
    return {
        type: POST_LOADING  
    }
}

// clear error 
export const clearError = () => {
  return {
    type:CLEAR_ERROR
  }
}