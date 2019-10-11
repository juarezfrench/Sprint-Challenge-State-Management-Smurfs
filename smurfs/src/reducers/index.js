import React from 'react';
import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE} from '../actions';


const initialState = {
    smurfDepot: [],
    isFetching: false,
    error: ''

}

const reducer = (state = initialState, action) =>{

switch(action.type){

    case START_FETCHING:
        return {
            ...state,
            isFetching: true,
            error: ''

        }
    case FETCH_SUCCESS:
        return {
            ...state,
            isFetching: false,
            error: '',
            quotesBox: action.payload

        }

    case FETCH_FAILURE:
    return {
        ...state,
        error: action.payload,
        isFetching: false,

                    }
default: // axios
// .get('http://localhost:3333/smurfs')
// .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
// console.log('index.js -> %c res.data:', 'color:indigo',res)
// .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))

    return state;

}
}

export default reducer
























