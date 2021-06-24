import { FETCH_PATIENT_DETAIL_FAIL, FETCH_PATIENT_DETAIL_SUCCESS, FETCH_PATIENT_FAIL, FETCH_PATIENT_SUCCESS, PATIENT_CREATE, PATIENT_CREATE_FAIL } from "./Type";
import Axios from 'axios';



// For Fetching patient
export const fetchPatient = (page,limit) => async(dispatch) => {
    console.log(page,limit);
    const token  = localStorage.getItem('token')
    try{

        const options = {
            headers:{
                'Content-Type':'application/json',
                'authorizationtoken':`Bearer ${token}`
            }
        };
        await Axios.get(`http://www.syllabusapi.ml/patients?page=${page}&limit=${limit}`,options).then((res) => {
            if(res.status === 200){
                console.log(res.data.data.results)
                dispatch({
                    type:FETCH_PATIENT_SUCCESS,
                    payload:res.data.data.results
                })
            }
        }).catch((err) => {
            dispatch({
                type:FETCH_PATIENT_FAIL,
                payload:err
            })
        })
    }catch(e){
        console.log(e)
    }
}


// For Creating patient

export const createPatient = (name,mobile,reason,address) => async(dispatch) => {
    try{

        Axios.post('http://www.syllabusapi.ml/patients',{
            name:name,
            mobile:mobile,
            resaon:reason,
            address:address
        }).then((res) => {
            console.log(res.data)
            if(res.status ===  200){
                dispatch({
                    type:PATIENT_CREATE,
                    payload:res.data
                })
            }
        }).catch((err) => {
            console.log(err)
            dispatch({
                type:PATIENT_CREATE_FAIL,
                payload:err
            })
        })

    }catch(e){
        console.log(e)
        dispatch({
            type:PATIENT_CREATE_FAIL,
            payload:e
        })
    }
}

// Fetch patient through id

export const fetchPatientDetail = (id) => async(dispatch) => {
    try{
        Axios.get(`http://www.syllabusapi.ml/${id}`).then((res) => {
            console.log(res.data);
            if(res.status === 200){
                dispatch({
                    type:FETCH_PATIENT_DETAIL_SUCCESS,
                    payload:res.data
                })               
            }
        }).catch((err) => {
            console.log(err);
            dispatch({
                type:FETCH_PATIENT_DETAIL_FAIL,
                payload:err
            })
        })
    }catch(e){
        dispatch({
            type:FETCH_PATIENT_DETAIL_FAIL,
            payload:e
        })
    }
}