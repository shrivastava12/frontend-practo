import {combineReducers} from 'redux';
import authReducer from './authReducer';
import patientReducer from './patientReducer';
import eventReducer from './eventReducer';


export default combineReducers({
   auth:authReducer,
   patient:patientReducer,
   event:eventReducer
});

