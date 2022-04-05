import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { dateReducer } from "./date";

export const store = createStore(dateReducer, applyMiddleware(thunk))