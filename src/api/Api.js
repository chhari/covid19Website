import React from 'react';
import axios from 'axios';

class Api extends React.Component {
    
    static getWorldData(){
        return axios.get('https://coronavirus-19-api.herokuapp.com/all');
    }

    static getCountryWiseData(){
        return axios.get(' https://coronavirus-19-api.herokuapp.com/countries');
    }


}

export default Api