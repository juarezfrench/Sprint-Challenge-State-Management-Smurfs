import React from "react";
import axios from 'axios'


export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const START_POSTING = 'START_POSTING';
export const POST_SUCCESS = "POST_SUCCESS"
export const POST_FAILURE = 'POST_FAILURE'

export const START_PUT = 'START_PUT';
export const PUT_SUCCESS = "PUT_SUCCESS"
export const PUT_FAILURE = 'PUT_FAILURE'

export const fetchSmurfs = () => dispatch =>{
  dispatch({type: START_FETCHING});
  
  axios
  .get('http://localhost:3333/smurfs')
  // .then(res => console.log(res))
  .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
  .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))

};

export const postSmurfs = smurf => dispatch => {
  dispatch({ type: START_POSTING });
  axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then(res => dispatch({ type: POST_SUCCESS }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}

export const putSmurfs = (id, smurfs) => dispatch => {
  dispatch({ type: START_PUT });
  axios
    .put(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: PUT_SUCCESS }))
    .catch(err => dispatch({ type: PUT_FAILURE, payload: err.response }))
}
