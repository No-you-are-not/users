import {createStore, compose, applyMiddleware} from 'redux'
import {pageReducer} from "./reducer";
import thunk from "redux-thunk";

export const store = createStore(pageReducer, compose(applyMiddleware(thunk)))