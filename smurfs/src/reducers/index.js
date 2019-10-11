import React from 'react';
import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, START_POSTING,
    POST_SUCCESS, POST_FAILURE} from '../actions';


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
            smurfDepot: action.payload

        }

    case FETCH_FAILURE:
    return {
        ...state,
        error: action.payload,
        isFetching: false,

                    }
    case START_POSTING:
        return {
            ...state,
            isPosting: true,
            error: '',
        };
        case POST_SUCCESS:
        return {
            ...state,
            isPosting: false,
        };
        case POST_FAILURE:
        return {
            ...state,
            error: action.payload,
        };
default: 

    return state;

}
}

export default reducer
























