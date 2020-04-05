/**
 * Redux Store
 *
 * Creates a Redux store for the application and passes the root reducer
 * to the store. Also applies the thunk middleware so that actions can
 * be dispatched asynchronously.
 */

// Dependencies
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

//import storage from "redux-persist/lib/storage/session";
// Reducers
import rootReducer from './reducers'
import countriesReducer from '../../redux/countries/countriesReducer'

// Create the Redux store.

const appReducer = combineReducers({rootSearch : rootReducer,contReducer:countriesReducer})
const store = createStore(appReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

// Export the Redux store.
export default store;
