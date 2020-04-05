import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import Map2 from "./Map2";
import Map from "./Map"
import { Row } from "reactstrap";

function App() {
  const [content, setContent] = useState("");
  return (
    <div className="content">
        <Map2 setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>     
    </div>
  );
}

export default App