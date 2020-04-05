import {COUNTIRES_FETCH_COMPLETE,WORLD_FETCH_COMPLETE,COUNTRIES_FETCH_ERROR,WORLD_FETCH_ERROR} from './countriesType'

const initialState = {
	responseWorld: {},
    msgWorld: '',
    response: {},
    msg: '',
    
}


const cktsearchReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case COUNTIRES_FETCH_COMPLETE: return {
            ...state, response: action.payload
        }
        case WORLD_FETCH_COMPLETE:return {
            ...state, responseWorld: action.payload
        }
        case COUNTRIES_FETCH_ERROR:return {
            ...state, msg: action.payload
        }
        case WORLD_FETCH_ERROR:return {
            ...state, msgWorld: action.payload
        }
        default: return state
    }
}


export default cktsearchReducer;