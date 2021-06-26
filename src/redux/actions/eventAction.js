import { FETCH_EVENT_FAIL, FETCH_EVENT_SUCCESS } from "./Type";
import Axios from 'axios';
import apiAddress from "../../config/apiAddress";

export const fetchEvent = () => (dispatch) => {
    console.log('in func')
    Axios.get(`${apiAddress}/events`).then((res) => {
        if(res.status === 200){
            
                 const newData =  res.data.map((d) => {
                    return {
                        ...d,
                        start:d.date,
                        end:d.date,
                        title:d.slot.length
                    }
                })
                 console.log(newData)
             dispatch({
                type:FETCH_EVENT_SUCCESS,
                payload:newData
            })
        }
    }).catch((err) => {
        dispatch({
            type:FETCH_EVENT_FAIL,
            payload:err.response.data.error
        })
    })
}
