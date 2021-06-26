import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS, SEND_OTP_FAIL, SEND_OTP_SUCCESS } from "../actions/Type";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
    isRegister:false,
    id:undefined,
    error:undefined
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);  
            localStorage.setItem('user',JSON.stringify(payload.doctor));         
            return {
                ...state,
                token: payload.token,
                isAuthenticated: true,
                user: payload.doctor
            };

        case REGISTER_SUCCESS:
            return {
                ...state,isRegister:true
            }
        
        case REGISTER_FAIL:
            return{
                ...state,
                isRegister:false
            }
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:

            return {
                ...state,
                isAuthenticated: false,
                user: localStorage.removeItem('user'),
                token: localStorage.removeItem('token')
            }

        case SEND_OTP_SUCCESS:
            return{
                ...state,
                error:undefined,
                id:payload

            }

        case SEND_OTP_FAIL:
            return{
                ...state,
                id:undefined,
                error:payload
            }
        default:
            return state;
    }
}