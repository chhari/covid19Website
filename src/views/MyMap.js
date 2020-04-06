import React , {useEffect,useState} from "react";
import { geoCentroid } from "d3-geo";
import { Tooltip, TooltipArrow, TooltipInner } from 'styled-tooltip-component'
import { useSelector, useDispatch } from 'react-redux';
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";
import states from './us-states.csv'
import {ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";


const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";


const MyMap = () => {

    const [data, setData] = useState([]);
    const [content, setContent] = useState("");
    const [hidden, setHidden] = useState(true);
    const [toolTipPosition, setToolTipPosition] = useState(null)
  const [tooltipContent, setToolTipContent] = useState('')

    const offsets = {
        VT: [50, -8],
        NH: [34, 2],
        MA: [30, -1],
        RI: [28, 2],
        CT: [35, 10],
        NJ: [34, 1],
        DE: [33, 0],
        MD: [47, 10],
        DC: [49, 21]
      };
      
      useEffect(() => {
          // https://www.bls.gov/lau/
          csv(states).then(states => {
            let finalData = states.filter(state => state.date === "2020-03-29")  
            setData(finalData);
          });
      
        }, []);
    
      let getValue = (id) => {
        console.log(id);
        const cur = data.find(s => s.fips === id);
        console.log(cur)
        return cur ? cur.cases : cur
      } 

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
    <div className="content">  
    <div className="ml-auto mr-auto text-center" md="6">
      <h3>{content}</h3>
      </div>
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map(geo => (  
              <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                fill={getValue(geo.id) ? colorScale(getValue(geo.id)) : "#EEE"}
                onMouseEnter={(event) => {
                    const { name} = geo.properties;
                    setContent(`${name} — ${getValue(geo.id) ? getValue(geo.id) : "0"}`)  
                    setToolTipContent(`${name} — ${getValue(geo.id) ? getValue(geo.id) : "0"}`)  
                    setHidden(false);
                    setToolTipPosition({
                        top: event.clientY,
                        left: event.clientX
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
            ))}
            {geographies.map(geo => {
              const centroid = geoCentroid(geo);
              const cur = data.find(s => s.fips === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {cur.id}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {cur.id}
                        </text>
                      </Annotation>
                    ))}
                    
                </g>
              );
            })}
          </>
        )}
      </Geographies>
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

export default MyMap;
