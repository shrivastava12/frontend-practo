import { FETCH_PATIENT_DETAIL_FAIL, FETCH_PATIENT_DETAIL_SUCCESS, FETCH_PATIENT_FAIL, FETCH_PATIENT_SUCCESS, PATIENT_CREATE, PATIENT_CREATE_FAIL } from "../actions/Type";

const initialState = {
    data:[],
    isSuccessFull:false,
    patient:{},
    createdPatient:false,
    fetchDetail:false
};

export default function(state = initialState,action) {
    const {type,payload} =  action;
    switch(type){
        case PATIENT_CREATE:
            return{
                ...state,
                patient:payload,
                createdPatient:true
            }
        case PATIENT_CREATE_FAIL:
            return{
                ...state,
                patient:[],
                createdPatient:false
            }
        case FETCH_PATIENT_SUCCESS:
            return{
                ...state,
                data:payload,
                isSuccessFull:true
            }
        case FETCH_PATIENT_FAIL:
            return{
                ...state,
                data:[],
                isSuccessFull:false
            }
        case FETCH_PATIENT_DETAIL_SUCCESS:
            return{
                ...state,
                patient:payload,
                fetchDetail:true
            }
        case FETCH_PATIENT_DETAIL_FAIL:
            return{
                ...state,
                patient:{},
                fetchDetail:false
            }
        default:
            return state;

    }
}