import React from 'react';
import axios from 'axios';

class Api extends React.Component {
    
    static getWorldData(){
        return axios.get('https://coronavirus-19-api.herokuapp.com/all');
    }

    static getCountryWiseData(){
        return axios.get(' https://coronavirus-19-api.herokuapp.com/countries');
    }

    static getTestData(){
        return axios.get('https://api.rootnet.in/covid19-in/unofficial/covid19india.org',{
            cors: 'no-cors',
            method: 'GET',
            redirect: 'follow',
          });

    }


}

export default Api