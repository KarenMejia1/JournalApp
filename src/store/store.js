import thunk from 'redux-thunk'

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "../reducers/authReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer
})

//createStore solo recibe UN reducer
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)//para trabajar aplicaciones asincronas 
    )
    ); 