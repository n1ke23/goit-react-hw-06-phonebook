import { createStore } from 'redux';
import combineReducers from "./reduce/reduceContacts";

const rootReducer = combineReducers();

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store