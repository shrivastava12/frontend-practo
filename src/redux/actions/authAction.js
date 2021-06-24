import { LOGIN_FAIL, LOGIN_SUCCESS,  REGISTER_FAIL, REGISTER_SUCCESS, SEND_OTP_SUCCESS,SEND_OTP_FAIL } from "./Type";
import Axios from 'axios';
import apiAddress from "../../config/apiAddress";
import {toast} from 'react-toastify';

// For doctor login
export const loginUsingEmailorNumber =  (username,password) => async(dispatch) => {
    console.log(username,password)
    console.log('inside funtion')
    try{
        Axios.post('http://www.syllabusapi.ml/doctors/login',{
            username:username,
            password:password
        }).then((res) => {
           if(res.status === 200){
               console.log(res.data.doctor)
               dispatch({
                   type:LOGIN_SUCCESS,
                   payload:res.data
               })
               toast('login successfull')
           }
        }).catch((err) => {
            dispatch({
                type:LOGIN_FAIL,
                payload:err
            })
        })
    }catch(e){
        dispatch({
            type:LOGIN_FAIL,
            payload:e
        })
    }
}

// Register Doctor

export const registerDoctor =  (name,email,phoneNo,password) => async(dispatch) => {
    
    console.log('inside funtion')
    try{
        Axios.post('http://www.syllabusapi.ml/doctors',{
            name:name,
            email:email,
            phone:phoneNo,
            password:password
        }).then((res) => {
           if(res.status === 200){
           
              console.log(res.data.data)
               dispatch({
                   type:REGISTER_SUCCESS,
                   payload:res.data.data
               })

           }
        }).catch((err) => {
            dispatch({
                type:REGISTER_FAIL,
                payload:err
            })
        })
    }catch(e){
        dispatch({
            type:REGISTER_FAIL,
            payload:e
        })
    }
}

// Login doctor or compounder usign Otp

export const loginUsingOtp = (phoneNo,type) => (dispatch) => {
    console.log('inside func')
    try{
        Axios.post(`${apiAddress}/${type}/login/otp`,{
            username:phoneNo
        }).then((res) => {
            if(res.status === 200){
                // console.log(res.data)
                dispatch({
                    type:SEND_OTP_SUCCESS,
                    payload:res.data
                })
                
            }
        }).catch((err) => {
            
            dispatch({
                type:SEND_OTP_FAIL,
                payload:err.response.data.error
            })
           
        })
    }catch(e){
        console.log('errrrrr')
        dispatch({
            type:SEND_OTP_FAIL,
            payload:e.message
        })
    }
}

// Verify otp for compounder or doctor

export const verifyOtp = (id,otp,type) => (dispatch) => {
    console.log('inside verify')
    try{
        Axios.post(`${apiAddress}/${type}/login/otp/verify`,{
            doctorId:id,
            otptoken:otp
        }).then((res) => {
           if(res.status == 200){
                console.log(res.data)
                dispatch({
                    type:LOGIN_SUCCESS,
                    payload:res.data
                })
            }
        }).catch((err) => {
               
                dispatch({
                    type:LOGIN_FAIL,
                    payload:err
                })
        })
    }catch(e){  
        console.log(e);
        dispatch({
            type:LOGIN_FAIL,
            payload:e
        })
    }
}
