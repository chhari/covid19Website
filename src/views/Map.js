import React, { memo, useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography,ZoomableGroup } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";
import { Tooltip, TooltipArrow, TooltipInner } from 'styled-tooltip-component'
//import { csv_data } from "../images/index";
import csv_data from "./us-counties.csv"



import { func } from "prop-types";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";


const Map = (setTooltipContent) => {
  const [data, setData] = useState([]);
  const [content, setContent] = useState("");
  const [hidden, setHidden] = useState(true);
  const [toolTipPosition, setToolTipPosition] = useState(null)
  const [tooltipContent, setToolTipContent] = useState('')

  useEffect(() => {
    // https://www.bls.gov/lau/
    csv(csv_data).then(counties => {
      let finalData = counties.filter(county => county.date === "2020-04-04")  
      setData(finalData);
    });

  }, []);

  const rounded = num => {
    if(num){
        return num 
    }
    else{
        return "0"
    }

  };

  

  const colorScale = scaleQuantile()
  .domain(data.map(d => d.cases))
  .range([
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618"
  ]);

  return (
    <div className ="content">
      <div className="ml-auto mr-auto text-center" md="6">
      <h3>{content}</h3>
      </div>
      <ComposableMap projection="geoAlbersUsa">
      <ZoomableGroup zoom={1}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
            const cur = data.find(s => s.fips === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={cur ? colorScale(cur.cases) : "#EEE"}

                  onMouseEnter={(event) => {
                    const { name} = geo.properties;
                    setContent(`${name} — ${cur ? cur.cases : "0"}`)
                    setToolTipContent(`${name} — ${cur ? cur.cases : "0"}`)  
                    setHidden(false);
                    setToolTipPosition({
                        top: event.pageY,
                        left: event.pageX
                      })
                  }}
                  onMouseLeave={() => {
                    setHidden(true)
                  }}
                  style={{
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
              );
            })
          }
        </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <Tooltip
        hidden={hidden}
        style={{
            top: `${(toolTipPosition && toolTipPosition.top) || 0}px`,
            left: `${(toolTipPosition && toolTipPosition.left) || 0}px`,
          }}
      >
        <TooltipArrow bottom />
        <TooltipInner right>{tooltipContent}</TooltipInner>
      </Tooltip>
    </div>

  );
};

export default memo(Map);
