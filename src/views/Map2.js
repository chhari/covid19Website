import React, { memo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {runCountryWiseData} from '../redux/countries/countriesAction'
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const Map2 = ({ setTooltipContent }) => {

  const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  let getKeyByValue = (object, value) => {
      return object.find(key => key.country === value);
  }
  const myResponse = useSelector( state => state.contReducer.response)

  const rounded = country  => {
    if(myResponse.length > 0){
      if(country == "United States of America"){
        let cont = "USA"
        console.log(myResponse)
        let usa  = getKeyByValue(myResponse,cont)
        console.log(usa)
        return  usa ? usa.cases : "no info availble" 
      }
      if(country == "United Kingdom"){
        let cont = "UK"
        let uk  = getKeyByValue(myResponse,cont)
        console.log(uk)
        return uk ? uk.cases : "no info availble" 
      }else{
        let res  = getKeyByValue(myResponse,country)
        return res ? res.cases : "no info availble" 
      }
    }else{
      // const dispatch = useDispatch()
      // dispatch(runCountryWiseData())
      return "no info on this country"
    }
    
  };
    
  return (
        <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { NAME} = geo.properties;
                      setTooltipContent(`${NAME} — ${rounded(NAME)}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none"
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none"
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none"
                      }
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
    );
};

export default memo(Map2);
