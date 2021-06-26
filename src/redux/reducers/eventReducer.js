import { FETCH_EVENT_FAIL, FETCH_EVENT_SUCCESS } from "../actions/Type";

const initialState = {
    event:[],
    error:undefined,
}

export default function (state = initialState,action){
    const {type,payload} = action;
    switch(type){
        case FETCH_EVENT_SUCCESS:
            return {...state,event:payload}
        case FETCH_EVENT_FAIL:
            return {...state,event:[]}
        default:
            return state;
    }
}