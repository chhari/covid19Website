import {COUNTIRES_FETCH_COMPLETE,
COUNTRIES_FETCH_ERROR,
WORLD_FETCH_COMPLETE,
WORLD_FETCH_ERROR
} from "./countriesType"
import Api from '../../api/Api'

export const recievedError = (msg) => {
    return {
        type: COUNTRIES_FETCH_ERROR,
        payload: msg
    }

}

export const reqworldSuccess = (data) => {

    return {
        type: WORLD_FETCH_COMPLETE,
        payload: data
    }

}

export const recievedworldError = (msg) => {
    return {
        type: WORLD_FETCH_ERROR,
        payload: msg
    }

}

export const reqSuccess = (data) => {

    return {
        type: COUNTIRES_FETCH_COMPLETE,
        payload: data
    }

}

export const runCountryWiseData = () =>{
	return async (dispatch) => {
        
        console.log("my log ")
	    var handleCmdPolling = function(){
	    	let timerValue = setTimeout(function(){
	            Api.getCountryWiseData().then(response => {
	                if(response){
                        console.log(response.data)  
                        dispatch(reqSuccess(response.data));
	                }                        
	            })
	            .catch(error=>{
	                const errMsg = error.message;
	                clearTimeout(timerValue);
	                dispatch(recievedError(errMsg));
	            });
	            console.log("Done")
	        },500);
	    }
	    handleCmdPolling();
	}
}


export const runWorldData = () =>{
	return async (dispatch) => {
		
	    var handleWorldPolling = function(){
	    	let timerValue = setTimeout(function(){
	            Api.getWorldData().then(response => {
	                if(response){ 
                        console.log(response) 
                        dispatch(reqworldSuccess(response.data));
	                }                        
	            })
	            .catch(error=>{
	                const errMsg = error.message;
	                clearTimeout(timerValue);
	                dispatch(recievedworldError(errMsg));
	            });
	            console.log("Done")
	        },500);
	    }
	    handleWorldPolling();
	}
}


