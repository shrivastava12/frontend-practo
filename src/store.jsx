import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';


const token = localStorage.getItem('token');

const initialState =  {
    auth:{
        token:token,
        isAuthenticated:token ? true : false,
        user:JSON.parse(localStorage.getItem('user'))
    }
}

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =  createStore(rootReducer,initialState,composeEnhancers(applyMiddleware(...middleware)));

export default store;