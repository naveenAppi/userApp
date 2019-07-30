import { GET_ERRORS , CLEAR_ERROR } from '../Actions/Types';

const intialState = {}

export default function (state = intialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload
        case CLEAR_ERROR:
            return {}
        default:
            return state
    }
    
}